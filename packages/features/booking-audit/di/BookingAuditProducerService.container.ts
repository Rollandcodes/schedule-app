import { createContainer } from "@schedule/features/di/di";
import type { BookingAuditProducerService } from "@schedule/features/booking-audit/lib/service/BookingAuditProducerService.interface";

import { moduleLoader as bookingAuditTaskerProducerServiceModule } from "./BookingAuditTaskerProducerService.module";

const container = createContainer();

export function getBookingAuditProducerService() {
  bookingAuditTaskerProducerServiceModule.loadModule(container);

  return container.get<BookingAuditProducerService>(bookingAuditTaskerProducerServiceModule.token);
}
