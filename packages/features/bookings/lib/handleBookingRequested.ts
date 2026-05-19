import { sendAttendeeRequestEmailAndSMS, sendOrganizerRequestEmail } from "@schedule/emails/email-manager";
import { getWebhookPayloadForBooking } from "@schedule/features/bookings/lib/getWebhookPayloadForBooking";
import getWebhooks from "@schedule/features/webhooks/lib/getWebhooks";
import sendPayload from "@schedule/features/webhooks/lib/sendOrSchedulePayload";
import logger from "@schedule/lib/logger";
import { safeStringify } from "@schedule/lib/safeStringify";
import type { Prisma } from "@schedule/prisma/client";
import { WebhookTriggerEvents } from "@schedule/prisma/enums";
import type { EventTypeMetadata } from "@schedule/prisma/zod-utils";
import type { CalendarEvent } from "@schedule/types/Calendar";

const log = logger.getSubLogger({ prefix: ["[handleBookingRequested] book:user"] });

/**
 * Supposed to do whatever is needed when a booking is requested.
 */
export async function handleBookingRequested(args: {
  evt: CalendarEvent;
  booking: {
    smsReminderNumber: string | null;
    eventType: {
      currency: string;
      description: string | null;
      id: number;
      length: number;
      price: number;
      requiresConfirmation: boolean;
      title: string;
      metadata: Prisma.JsonValue;
    } | null;
    eventTypeId: number | null;
    userId: number | null;
    id: number;
  };
}) {
  const { evt, booking } = args;

  log.debug("Emails: Sending booking requested emails");

  await sendOrganizerRequestEmail({ ...evt }, booking?.eventType?.metadata as EventTypeMetadata);
  await sendAttendeeRequestEmailAndSMS(
    { ...evt },
    evt.attendees[0],
    booking?.eventType?.metadata as EventTypeMetadata
  );

  try {
    const subscribersBookingRequested = await getWebhooks({
      userId: booking.userId,
      eventTypeId: booking.eventTypeId,
      triggerEvent: WebhookTriggerEvents.BOOKING_REQUESTED,
      teamId: null,
      orgId: undefined,
    });

    const webhookPayload = getWebhookPayloadForBooking({
      booking,
      evt,
    });

    const promises = subscribersBookingRequested.map((sub) =>
      sendPayload(
        sub.secret,
        WebhookTriggerEvents.BOOKING_REQUESTED,
        new Date().toISOString(),
        sub,
        webhookPayload
      ).catch((e) => {
        log.error(
          `Error executing webhook for event: ${WebhookTriggerEvents.BOOKING_REQUESTED}, URL: ${sub.subscriberUrl}, bookingId: ${evt.bookingId}, bookingUid: ${evt.uid}`,
          safeStringify(e)
        );
      })
    );
    await Promise.all(promises);
  } catch (error) {
    // Silently fail
    log.error("Error in handleBookingRequested", safeStringify(error));
  }
}
