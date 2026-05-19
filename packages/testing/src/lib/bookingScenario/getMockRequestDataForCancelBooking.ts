import type { bookingCancelSchema } from "@schedule/prisma/zod-utils";
import type z from "zod";

export function getMockRequestDataForCancelBooking(data: z.infer<typeof bookingCancelSchema>) {
  return data;
}
