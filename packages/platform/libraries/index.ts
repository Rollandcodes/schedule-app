import { getBookingForReschedule } from "@schedule/features/bookings/lib/get-booking";
import getAllUserBookings from "@schedule/features/bookings/lib/getAllUserBookings";
import { getBookingFieldsWithSystemFields } from "@schedule/features/bookings/lib/getBookingFields";
import getBookingInfo from "@schedule/features/bookings/lib/getBookingInfo";
import handleCancelBooking from "@schedule/features/bookings/lib/handleCancelBooking";
import handleMarkNoShow from "@schedule/features/handleMarkNoShow";
import { getTranslation } from "@schedule/i18n/server";
import { symmetricDecrypt, symmetricEncrypt } from "@schedule/lib/crypto";
import type { Prisma } from "@schedule/prisma/client";
import { credentialForCalendarServiceSelect } from "@schedule/prisma/selects/credential";
import { paymentDataSelect } from "@schedule/prisma/selects/payment";

export { slugify } from "@schedule/lib/slugify";
export { slugifyLenient } from "@schedule/lib/slugify-lenient";
export { getBookingForReschedule };

export { getWebhookProducer } from "@schedule/features/di/webhooks/containers/webhook";
export { getUsernameList } from "@schedule/features/eventtypes/lib/defaultEvents";
export {
  DEFAULT_WEBHOOK_VERSION,
  WebhookVersion,
} from "@schedule/features/webhooks/lib/interface/IWebhookRepository";
export type { IWebhookProducerService } from "@schedule/features/webhooks/lib/interface/WebhookProducerService";
export {
  AttributeType,
  CreationSource,
  MembershipRole,
  PeriodType,
  SchedulingType,
  TimeUnit,
  WebhookTriggerEvents,
} from "@schedule/prisma/enums";
export type { CalendarEvent, EventBusyDate } from "@schedule/types/Calendar";

export { handleMarkNoShow };

export type {
  BookingCreateBody,
  BookingResponse,
} from "@schedule/features/bookings/types";
export type { ConnectedCalendar } from "@schedule/features/calendars/lib/CalendarManager";
export {
  getBusyCalendarTimes,
  updateEvent,
} from "@schedule/features/calendars/lib/CalendarManager";
export type { ConnectedDestinationCalendars } from "@schedule/features/calendars/lib/getConnectedDestinationCalendars";
export { getConnectedDestinationCalendarsAndEnsureDefaultsInDb } from "@schedule/features/calendars/lib/getConnectedDestinationCalendars";
export type { CityTimezones } from "@schedule/features/cityTimezones/cityTimezonesHandler";
export { cityTimezonesHandler } from "@schedule/features/cityTimezones/cityTimezonesHandler";
export { ENABLE_ASYNC_TASKER, MINUTES_TO_BOOK } from "@schedule/lib/constants";
export { TRPCError } from "@trpc/server";

export { getAllUserBookings };
export { getBookingInfo };
export { handleCancelBooking };

export { dynamicEvent } from "@schedule/features/eventtypes/lib/defaultEvents";
export { parseBookingLimit } from "@schedule/lib/intervalLimits/isBookingLimits";
export { parseRecurringEvent } from "@schedule/lib/isRecurringEvent";
export {
  bookingMetadataSchema,
  teamMetadataSchema,
  userMetadata,
} from "@schedule/prisma/zod-utils";

export { symmetricEncrypt, symmetricDecrypt };

export { getTranslation };

export { validateCustomEventName } from "@schedule/features/eventtypes/lib/eventNaming";

export type TeamQuery = Prisma.TeamGetPayload<{
  select: {
    id: true;
    credentials: {
      select: typeof import("@schedule/prisma/selects/credential").credentialForCalendarServiceSelect;
    };
    name: true;
    logoUrl: true;
    members: {
      select: {
        role: true;
      };
    };
  };
}>;

export { credentialForCalendarServiceSelect };
export { paymentDataSelect };
export { confirmHandler as confirmBookingHandler } from "@schedule/trpc/server/routers/viewer/bookings/confirm.handler";
export { getBookingFieldsWithSystemFields };

export { checkAdminOrOwner } from "@schedule/features/auth/lib/checkAdminOrOwner";
export { sendLocationChangeEmailsAndSMS } from "@schedule/emails/email-manager";
export { verifyCodeUnAuthenticated } from "@schedule/features/auth/lib/verifyCodeUnAuthenticated";
export { sendEmailVerificationByCode } from "@schedule/features/auth/lib/verifyEmail";
export { getCalendarLinks } from "@schedule/features/bookings/lib/getCalendarLinks";
export { BookingReferenceRepository } from "@schedule/features/bookingReference/repositories/BookingReferenceRepository";
export { BookingAccessService } from "@schedule/features/bookings/services/BookingAccessService";
export { CredentialRepository } from "@schedule/features/credentials/repositories/CredentialRepository";
export type { OrgMembershipLookup } from "@schedule/features/di/modules/OrgMembershipLookup";
export type { OAuth2Tokens } from "@schedule/features/oauth/services/OAuthService";
export { OAuthService } from "@schedule/features/oauth/services/OAuthService";
export { generateSecret } from "@schedule/features/oauth/utils/generateSecret";
export { ProfileRepository } from "@schedule/features/profile/repositories/ProfileRepository";
export { SelectedCalendarRepository } from "@schedule/features/selectedCalendar/repositories/SelectedCalendarRepository";
export type { Tasker } from "@schedule/features/tasker/tasker";
export { getTasker } from "@schedule/features/tasker/tasker-factory";
export { buildCalEventFromBooking } from "@schedule/lib/buildCalEventFromBooking";
export { getVideoCallUrlFromCalEvent } from "@schedule/lib/CalEventParser";
export { verifyCodeChallenge } from "@schedule/lib/pkce";
export { encryptServiceAccountKey } from "@schedule/lib/server/serviceAccountKey";
export { validateUrlForSSRFSync } from "@schedule/lib/ssrfProtection";
export type { TraceContext } from "@schedule/lib/tracing";
export { distributedTracing } from "@schedule/lib/tracing/factory";
export {
  type BookingWithUserAndEventDetails,
  bookingWithUserAndEventDetailsSelect,
} from "@schedule/prisma/selects/booking";
export { checkEmailVerificationRequired } from "@schedule/trpc/server/routers/publicViewer/checkIfUserEmailVerificationRequired.handler";
export type { CredentialForCalendarService } from "@schedule/types/Credential";

// === Stubs for deleted EE features still imported by API v2 ===

// Round-robin reassignment removed (EE feature) — stubs for API v2
export async function roundRobinManualReassignment(_args: {
  bookingId: number;
  newUserId: number;
  orgId?: number | null;
  reassignReason?: string;
  reassignedById?: number;
  emailsEnabled?: boolean;
  platformClientParams?: unknown;
  actionSource?: string;
  reassignedByUuid?: string;
}): Promise<void> {
  // No-op in community edition
}

export async function roundRobinReassignment(_args: {
  bookingId: number;
  orgId?: number | null;
  emailsEnabled?: boolean;
  platformClientParams?: unknown;
  reassignedById?: number;
  actionSource?: string;
  reassignedByUuid?: string;
}): Promise<void> {
  // No-op in community edition
}

// createApiKeyHandler removed (EE feature) — stub for API v2
export async function createApiKeyHandler(_args: {
  ctx: { user: { id: number } };
  input: {
    note?: string | null;
    neverExpires?: boolean;
    expiresAt?: Date | null;
    teamId?: number;
  };
}): Promise<string> {
  throw new Error("API key creation is not available in community edition");
}

// getClientSecretFromPayment removed (EE feature) — stub for API v2
export function getClientSecretFromPayment(payment: { data: Record<string, unknown> }): string | null {
  const data = payment.data;
  if (data && typeof data === "object" && "client_secret" in data) {
    return data.client_secret as string;
  }
  return null;
}

// verifyCodeAuthenticated removed (EE feature) — stub for API v2
export async function verifyCodeAuthenticated(_args: {
  user: { id: number; email?: string; [key: string]: unknown };
  email: string;
  code: string;
}): Promise<boolean> {
  return false;
}

// createNewUsersConnectToOrgIfExists removed (EE feature) — stub for API v2
export async function createNewUsersConnectToOrgIfExists(_args: {
  invitations: { usernameOrEmail: string; role: string }[];
  creationSource?: string;
  teamId: number;
  isOrg: boolean;
  parentId: number | null;
  autoAcceptEmailDomain: string;
  orgConnectInfoByUsernameOrEmail: Record<string, { orgId: number; autoAccept: boolean }>;
  isPlatformManaged?: boolean;
  timeFormat?: number;
  weekStart?: string;
  timeZone?: string;
  language?: string;
}): Promise<{ id: number; email: string; username: string }[]> {
  throw new Error("Organization user creation is not available in community edition");
}

// sendVerificationCode removed (EE feature) — stub for API v2
export async function sendVerificationCode(_phoneNumber: string): Promise<void> {
  throw new Error("Phone verification is not available in community edition");
}

// verifyPhoneNumber removed (EE feature) — stub for API v2
export async function verifyPhoneNumber(
  _phoneNumber: string,
  _code: string,
  _userId: number,
  _teamId?: number
): Promise<boolean> {
  throw new Error("Phone verification is not available in community edition");
}
