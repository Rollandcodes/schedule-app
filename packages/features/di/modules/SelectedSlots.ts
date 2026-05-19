import { DI_TOKENS } from "@schedule/features/di/tokens";
import { PrismaSelectedSlotRepository } from "@schedule/features/selectedSlots/repositories/PrismaSelectedSlotRepository";

import { createModule } from "../di";

export const selectedSlotsRepositoryModule = createModule();
selectedSlotsRepositoryModule
  .bind(DI_TOKENS.SELECTED_SLOT_REPOSITORY)
  .toClass(PrismaSelectedSlotRepository, [DI_TOKENS.PRISMA_CLIENT]);
