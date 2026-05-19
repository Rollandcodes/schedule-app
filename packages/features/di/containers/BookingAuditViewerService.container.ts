import type { BookingAuditViewerService } from "@schedule/features/booking-audit/lib/service/BookingAuditViewerService";
import { BOOKING_AUDIT_DI_TOKENS } from "@schedule/features/booking-audit/di/tokens";
import { DI_TOKENS } from "@schedule/features/di/tokens";
import { prismaModule } from "@schedule/features/di/modules/Prisma";
import { moduleLoader as bookingAuditRepositoryModuleLoader } from "@schedule/features/booking-audit/di/BookingAuditRepository.module";
import { moduleLoader as bookingAuditViewerServiceModuleLoader } from "@schedule/features/booking-audit/di/BookingAuditViewerService.module";

import { createContainer } from "../di";

const container = createContainer();
container.load(DI_TOKENS.PRISMA_MODULE, prismaModule);
bookingAuditRepositoryModuleLoader.loadModule(container);
bookingAuditViewerServiceModuleLoader.loadModule(container);

export function getBookingAuditViewerService() {
  return container.get<BookingAuditViewerService>(BOOKING_AUDIT_DI_TOKENS.BOOKING_AUDIT_VIEWER_SERVICE);
}
