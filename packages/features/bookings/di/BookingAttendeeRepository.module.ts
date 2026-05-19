import { PrismaBookingAttendeeRepository } from "@schedule/features/bookings/repositories/PrismaBookingAttendeeRepository";
import { bindModuleToClassOnToken, createModule } from "@schedule/features/di/di";
import { DI_TOKENS } from "@schedule/features/di/tokens";
import { moduleLoader as prismaModuleLoader } from "@schedule/features/di/modules/Prisma";

export const bookingAttendeeRepositoryModule = createModule();
const token = DI_TOKENS.BOOKING_ATTENDEE_REPOSITORY;
const moduleToken = DI_TOKENS.BOOKING_ATTENDEE_REPOSITORY_MODULE;
const loadModule = bindModuleToClassOnToken({
  module: bookingAttendeeRepositoryModule,
  moduleToken,
  token,
  classs: PrismaBookingAttendeeRepository,
  dep: prismaModuleLoader,
});

export const moduleLoader = {
  token,
  loadModule,
};
