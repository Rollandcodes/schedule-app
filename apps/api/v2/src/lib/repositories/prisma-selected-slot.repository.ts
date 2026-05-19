import { PrismaWriteService } from "@/modules/prisma/prisma-write.service";
import { Injectable } from "@nestjs/common";

import { PrismaSelectedSlotRepository as PrismaSelectedSlotRepositoryLib } from "@schedule/platform-libraries/repositories";
import type { PrismaClient } from "@schedule/prisma";

@Injectable()
export class PrismaSelectedSlotRepository extends PrismaSelectedSlotRepositoryLib {
  constructor(private readonly dbWrite: PrismaWriteService) {
    super(dbWrite.prisma as unknown as PrismaClient);
  }
}
