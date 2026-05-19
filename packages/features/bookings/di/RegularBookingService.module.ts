import { moduleLoader as bookingEventHandlerModuleLoader } from "@schedule/features/bookings/di/BookingEventHandlerService.module";
import { RegularBookingService } from "@schedule/features/bookings/lib/service/RegularBookingService";
import { bindModuleToClassOnToken, createModule, type ModuleLoader } from "@schedule/features/di/di";
import { moduleLoader as bookingRepositoryModuleLoader } from "@schedule/features/di/modules/Booking";
import { moduleLoader as checkBookingAndDurationLimitsModuleLoader } from "@schedule/features/di/modules/CheckBookingAndDurationLimits";
import { moduleLoader as luckyUserServiceModuleLoader } from "@schedule/features/di/modules/LuckyUser";
import { moduleLoader as prismaModuleLoader } from "@schedule/features/di/modules/Prisma";
import { moduleLoader as userRepositoryModuleLoader } from "@schedule/features/di/modules/User";
import { DI_TOKENS } from "@schedule/features/di/tokens";
import { moduleLoader as webhookProducerModuleLoader } from "@schedule/features/di/webhooks/modules/WebhookProducerService.module";
import { moduleLoader as hashedLinkServiceModuleLoader } from "@schedule/features/hashedLink/di/HashedLinkService.module";
import { moduleLoader as bookingEmailAndSmsTaskerModuleLoader } from "./tasker/BookingEmailAndSmsTasker.module";

const thisModule = createModule();
const token = DI_TOKENS.REGULAR_BOOKING_SERVICE;
const moduleToken = DI_TOKENS.REGULAR_BOOKING_SERVICE_MODULE;
const loadModule = bindModuleToClassOnToken({
  module: thisModule,
  moduleToken,
  token,
  classs: RegularBookingService,
  depsMap: {
    // TODO: In a followup PR, we aim to remove prisma dependency and instead inject the repositories as dependencies.
    prismaClient: prismaModuleLoader,
    checkBookingAndDurationLimitsService: checkBookingAndDurationLimitsModuleLoader,
    bookingRepository: bookingRepositoryModuleLoader,
    luckyUserService: luckyUserServiceModuleLoader,
    userRepository: userRepositoryModuleLoader,
    hashedLinkService: hashedLinkServiceModuleLoader,
    bookingEmailAndSmsTasker: bookingEmailAndSmsTaskerModuleLoader,
    bookingEventHandler: bookingEventHandlerModuleLoader,
    webhookProducer: webhookProducerModuleLoader,
  },
});

export const moduleLoader = {
  token,
  loadModule,
} satisfies ModuleLoader;

export type { RegularBookingService };
