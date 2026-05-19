import { PrismaWriteService } from "@/modules/prisma/prisma-write.service";
import { Injectable } from "@nestjs/common";

import { PrismaUserRepository as PrismaUserRepositoryLib } from "@schedule/platform-libraries/repositories";
import type { PrismaClient } from "@schedule/prisma";

@Injectable()
export class PrismaUserRepository extends PrismaUserRepositoryLib {
  constructor(private readonly dbWrite: PrismaWriteService) {
    super(dbWrite.prisma as unknown as PrismaClient);
  }
}
