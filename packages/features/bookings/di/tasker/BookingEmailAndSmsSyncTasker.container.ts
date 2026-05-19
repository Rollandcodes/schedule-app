import { BookingEmailAndSmsSyncTasker } from "@schedule/features/bookings/lib/tasker/BookingEmailAndSmsSyncTasker";
import { createContainer } from "@schedule/features/di/di";

import { moduleLoader as BookingEmailAndSmsSyncTaskerModule } from "./BookingEmailAndSmsSyncTasker.module";

const container = createContainer();

export function getBookingEmailAndSmsSyncTasker(): BookingEmailAndSmsSyncTasker {
  BookingEmailAndSmsSyncTaskerModule.loadModule(container);
  return container.get<BookingEmailAndSmsSyncTasker>(BookingEmailAndSmsSyncTaskerModule.token);
}
