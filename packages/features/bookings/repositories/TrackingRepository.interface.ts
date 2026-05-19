import type { Tracking } from "@schedule/prisma/client";

export interface TrackingRepositoryInterface {
  findByBookingUid(bookingUid: string): Promise<Tracking | null>;
}
