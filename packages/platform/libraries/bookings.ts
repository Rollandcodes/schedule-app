export { getBookingAttendeesService } from "@schedule/features/bookings/di/BookingAttendeesService.container";
export { BookingEmailSmsHandler } from "@schedule/features/bookings/lib/BookingEmailSmsHandler";
export { CheckBookingLimitsService } from "@schedule/features/bookings/lib/checkBookingLimits";
export type { RegularBookingCreateResult } from "@schedule/features/bookings/lib/dto/types";
export { LuckyUserService } from "@schedule/features/bookings/lib/getLuckyUser";
export { BookingCancelService } from "@schedule/features/bookings/lib/handleCancelBooking";
export { CheckBookingAndDurationLimitsService } from "@schedule/features/bookings/lib/handleNewBooking/checkBookingAndDurationLimits";
export { BookingEventHandlerService } from "@schedule/features/bookings/lib/onBookingEvents/BookingEventHandlerService";
export { RecurringBookingService } from "@schedule/features/bookings/lib/service/RecurringBookingService";
export { RegularBookingService } from "@schedule/features/bookings/lib/service/RegularBookingService";
export { BookingEmailAndSmsSyncTasker } from "@schedule/features/bookings/lib/tasker/BookingEmailAndSmsSyncTasker";
export { BookingEmailAndSmsTasker } from "@schedule/features/bookings/lib/tasker/BookingEmailAndSmsTasker";
export { BookingEmailAndSmsTaskService } from "@schedule/features/bookings/lib/tasker/BookingEmailAndSmsTaskService";
export { BookingEmailAndSmsTriggerDevTasker } from "@schedule/features/bookings/lib/tasker/BookingEmailAndSmsTriggerTasker";
export { BookingAttendeesRemoveService } from "@schedule/features/bookings/services/BookingAttendeesRemoveService";
export { BookingAttendeesService } from "@schedule/features/bookings/services/BookingAttendeesService";
export { getWebhookProducer } from "@schedule/features/di/webhooks/containers/webhook";
export { PrismaOrgMembershipRepository } from "@schedule/features/membership/repositories/PrismaOrgMembershipRepository";
export type { IWebhookProducerService } from "@schedule/features/webhooks/lib/interface/WebhookProducerService";
export {
  type BookingWithUserAndEventDetails,
  bookingWithUserAndEventDetailsSelect,
} from "@schedule/prisma/selects/booking";
export { addGuestsHandler } from "@schedule/trpc/server/routers/viewer/bookings/addGuests.handler";

// Booking audit was removed during EE cleanup — makeUserActor stub for API v2
export function makeUserActor(_uuid: string): { type: string; actorId: string } {
  return { type: "user", actorId: _uuid };
}
