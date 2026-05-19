import { BookingAccessService } from "@schedule/features/bookings/services/BookingAccessService";
import { moduleLoader as prismaModuleLoader } from "@schedule/features/di/modules/Prisma";
import { DI_TOKENS } from "@schedule/features/di/tokens";

import { bindModuleToClassOnToken, createModule, type ModuleLoader } from "../di";

export const bookingAccessServiceModule = createModule();
const token = DI_TOKENS.BOOKING_ACCESS_SERVICE;
const moduleToken = DI_TOKENS.BOOKING_ACCESS_SERVICE_MODULE;
const loadModule = bindModuleToClassOnToken({
  module: bookingAccessServiceModule,
  moduleToken,
  token,
  classs: BookingAccessService,
  dep: prismaModuleLoader,
});

export const moduleLoader: ModuleLoader = {
  token,
  loadModule,
};
