import { DI_TOKENS } from "@schedule/features/di/tokens";
import { UserRepository } from "@schedule/features/users/repositories/UserRepository";
import { moduleLoader as prismaModuleLoader } from "@schedule/features/di/modules/Prisma";

import { createModule, bindModuleToClassOnToken, type ModuleLoader } from "../di";

export const userRepositoryModule = createModule();
const token = DI_TOKENS.USER_REPOSITORY;
const moduleToken = DI_TOKENS.USER_REPOSITORY_MODULE;
const loadModule = bindModuleToClassOnToken({
  module: userRepositoryModule,
  moduleToken,
  token,
  classs: UserRepository,
  dep: prismaModuleLoader,
});

export const moduleLoader: ModuleLoader = {
  token,
  loadModule,
};
