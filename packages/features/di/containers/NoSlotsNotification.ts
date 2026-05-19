import { DI_TOKENS } from "@schedule/features/di/tokens";
import { redisModule } from "@schedule/features/redis/di/redisModule";
import { membershipRepositoryModule } from "@schedule/features/users/di/MembershipRepository.module";
import { prismaModule } from "@schedule/features/di/modules/Prisma";
import type { NoSlotsNotificationService } from "@schedule/features/slots/handleNotificationWhenNoSlots";

import { createContainer } from "../di";
import { noSlotsNotificationModule } from "../modules/NoSlotsNotification";

const container = createContainer();
container.load(DI_TOKENS.REDIS_CLIENT, redisModule);
container.load(DI_TOKENS.PRISMA_MODULE, prismaModule);
container.load(DI_TOKENS.MEMBERSHIP_REPOSITORY_MODULE, membershipRepositoryModule);
container.load(DI_TOKENS.NO_SLOTS_NOTIFICATION_SERVICE_MODULE, noSlotsNotificationModule);

export function getNoSlotsNotificationService() {
  return container.get<NoSlotsNotificationService>(DI_TOKENS.NO_SLOTS_NOTIFICATION_SERVICE);
}
