import EventManager from "@schedule/features/bookings/lib/EventManager";

export { getPublicEvent, type PublicEventType } from "@schedule/features/eventtypes/lib/getPublicEvent";

export { getBulkUserEventTypes, getBulkTeamEventTypes } from "@schedule/app-store/_utils/getBulkEventTypes";

export { createHandler as createEventType } from "@schedule/trpc/server/routers/viewer/eventTypes/heavy/create.handler";
export { updateHandler as updateEventType } from "@schedule/trpc/server/routers/viewer/eventTypes/heavy/update.handler";

export { listWithTeamHandler } from "@schedule/trpc/server/routers/viewer/eventTypes/listWithTeam.handler";

export type { TUpdateInputSchema as TUpdateEventTypeInputSchema } from "@schedule/trpc/server/routers/viewer/eventTypes/heavy/update.schema";
export type { EventTypesPublic } from "@schedule/features/eventtypes/lib/getEventTypesPublic";
export { getEventTypesPublic } from "@schedule/features/eventtypes/lib/getEventTypesPublic";
export { parseEventTypeColor } from "@schedule/lib/isEventTypeColor";

export {
  EventTypeMetaDataSchema,
  eventTypeBookingFields,
  eventTypeLocations,
} from "@schedule/prisma/zod-utils";

export type { EventTypeMetadata } from "@schedule/prisma/zod-utils";

export { validateCustomEventName } from "@schedule/features/eventtypes/lib/eventNaming";
export { EventManager };
export { getEventTypeById } from "@schedule/features/eventtypes/lib/getEventTypeById";
export { getEventTypesByViewer } from "@schedule/features/eventtypes/lib/getEventTypesByViewer";
export type { EventType } from "@schedule/features/eventtypes/lib/getEventTypeById";
export type { EventTypesByViewer } from "@schedule/features/eventtypes/lib/getEventTypesByViewer";
export type { UpdateEventTypeReturn } from "@schedule/trpc/server/routers/viewer/eventTypes/heavy/update.handler";
export { bulkUpdateEventsToDefaultLocation } from "@schedule/app-store/_utils/bulkUpdateEventsToDefaultLocation";
export { bulkUpdateTeamEventsToDefaultLocation } from "@schedule/app-store/_utils/bulkUpdateTeamEventsToDefaultLocation";
