import type { PrismaClient } from "@schedule/prisma";
import prisma from "@schedule/prisma";

import type { TrackingRepositoryInterface } from "./TrackingRepository.interface";

export class PrismaTrackingRepository implements TrackingRepositoryInterface {
  constructor(private readonly prismaClient: PrismaClient = prisma) {}

  async findByBookingUid(bookingUid: string) {
    return await this.prismaClient.tracking.findFirst({
      where: {
        booking: {
          uid: bookingUid,
        },
      },
    });
  }
}
