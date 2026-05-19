import { BookingRepository } from "@schedule/features/bookings/repositories/BookingRepository";
import { ErrorCode } from "@schedule/lib/errorCodes";
import { HttpError } from "@schedule/lib/http-error";
import prisma from "@schedule/prisma";
import { BookingStatus } from "@schedule/prisma/enums";

// TODO: Inject.
export async function getOriginalRescheduledBooking(uid: string, seatsEventType?: boolean) {
  const bookingRepo = new BookingRepository(prisma);
  const originalBooking = await bookingRepo.findOriginalRescheduledBooking(uid, seatsEventType);

  if (!originalBooking) {
    throw new HttpError({ statusCode: 404, message: "Could not find original booking" });
  }

  if (originalBooking.status === BookingStatus.CANCELLED && !originalBooking.rescheduled) {
    throw new HttpError({ statusCode: 400, message: ErrorCode.CancelledBookingsCannotBeRescheduled });
  }

  return originalBooking;
}

export type BookingType = Awaited<ReturnType<typeof getOriginalRescheduledBooking>> | null;
export type OriginalRescheduledBooking = Awaited<ReturnType<typeof getOriginalRescheduledBooking>> | null;
