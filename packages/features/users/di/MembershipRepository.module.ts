import { bindModuleToClassOnToken, createModule, type ModuleLoader } from "@schedule/features/di/di";
import { DI_TOKENS } from "@schedule/features/di/tokens";
import { MembershipRepository } from "@schedule/features/membership/repositories/MembershipRepository";
import { moduleLoader as prismaModuleLoader } from "@schedule/features/di/modules/Prisma";

export const membershipRepositoryModule = createModule();
const token = DI_TOKENS.MEMBERSHIP_REPOSITORY;
const moduleToken = DI_TOKENS.MEMBERSHIP_REPOSITORY_MODULE;
const loadModule = bindModuleToClassOnToken({
  module: membershipRepositoryModule,
  moduleToken,
  token,
  classs: MembershipRepository,
  dep: prismaModuleLoader,
});

export const moduleLoader: ModuleLoader = {
  token,
  loadModule,
};

export type { MembershipRepository };
