import { bindModuleToClassOnToken, createModule, type ModuleLoader } from "@schedule/features/di/di";
import { DI_TOKENS } from "@schedule/features/di/tokens";
import { ProfileRepository } from "@schedule/features/profile/repositories/ProfileRepository";
import { moduleLoader as prismaModuleLoader } from "@schedule/features/di/modules/Prisma";

export const profileRepositoryModule = createModule();
const token = DI_TOKENS.PROFILE_REPOSITORY;
const moduleToken = DI_TOKENS.PROFILE_REPOSITORY_MODULE;
const loadModule = bindModuleToClassOnToken({
  module: profileRepositoryModule,
  moduleToken,
  token,
  classs: ProfileRepository,
  depsMap: {
    prismaClient: prismaModuleLoader,
  },
});

export const moduleLoader: ModuleLoader = {
  token,
  loadModule,
};
