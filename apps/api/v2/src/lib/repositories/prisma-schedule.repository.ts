import { PrismaWriteService } from "@/modules/prisma/prisma-write.service";
import { Injectable } from "@nestjs/common";

import { PrismaScheduleRepository as PrismaScheduleRepositoryLib } from "@schedule/platform-libraries/repositories";
import type { PrismaClient } from "@schedule/prisma";

@Injectable()
export class PrismaScheduleRepository extends PrismaScheduleRepositoryLib {
  constructor(private readonly dbWrite: PrismaWriteService) {
    super(dbWrite.prisma as unknown as PrismaClient);
  }
}
