export {
  ScheduleRepository,
  type FindDetailedScheduleByIdReturnType,
} from "@schedule/features/schedules/repositories/ScheduleRepository";

export {
  updateSchedule,
  type UpdateScheduleResponse,
} from "@schedule/features/schedules/services/ScheduleService";
export { UserAvailabilityService } from "@schedule/features/availability/lib/getUserAvailability";

export {
  createHandler as createScheduleHandler,
  type CreateScheduleHandlerReturn,
} from "@schedule/trpc/server/routers/viewer/availability/schedule/create.handler";
export { ZCreateInputSchema as CreateScheduleSchema } from "@schedule/trpc/server/routers/viewer/availability/schedule/create.schema";

export {
  listHandler as getAvailabilityListHandler,
  type GetAvailabilityListHandlerReturn,
} from "@schedule/trpc/server/routers/viewer/availability/list.handler";
export {
  duplicateHandler as duplicateScheduleHandler,
  type DuplicateScheduleHandlerReturn,
} from "@schedule/trpc/server/routers/viewer/availability/schedule/duplicate.handler";

export { getScheduleByEventSlugHandler } from "@schedule/trpc/server/routers/viewer/availability/schedule/getScheduleByEventTypeSlug.handler";
