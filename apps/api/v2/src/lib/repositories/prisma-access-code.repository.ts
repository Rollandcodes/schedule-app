import { PrismaWriteService } from "@/modules/prisma/prisma-write.service";
import { Injectable } from "@nestjs/common";

import { PrismaAccessCodeRepository as PrismaAccessCodeRepositoryLib } from "@schedule/platform-libraries/repositories";
import type { PrismaClient } from "@schedule/prisma";

@Injectable()
export class PrismaAccessCodeRepository extends PrismaAccessCodeRepositoryLib {
  constructor(private readonly dbWrite: PrismaWriteService) {
    super(dbWrite.prisma as unknown as PrismaClient);
  }
}
