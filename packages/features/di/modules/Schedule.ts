import { DI_TOKENS } from "@schedule/features/di/tokens";
import { ScheduleRepository } from "@schedule/features/schedules/repositories/ScheduleRepository";

import { createModule } from "../di";

export const scheduleRepositoryModule = createModule();
scheduleRepositoryModule
  .bind(DI_TOKENS.SCHEDULE_REPOSITORY)
  .toClass(ScheduleRepository, [DI_TOKENS.PRISMA_CLIENT]); // Maps 'prismaClient' param to PRISMA_CLIENT token
