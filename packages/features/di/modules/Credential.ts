import { CredentialRepository } from "@schedule/features/credentials/repositories/CredentialRepository";
import { DI_TOKENS } from "@schedule/features/di/tokens";
import { moduleLoader as prismaModuleLoader } from "@schedule/features/di/modules/Prisma";

import { createModule, bindModuleToClassOnToken, type ModuleLoader } from "../di";

export const credentialRepositoryModule = createModule();
const token = DI_TOKENS.CREDENTIAL_REPOSITORY;
const moduleToken = DI_TOKENS.CREDENTIAL_REPOSITORY_MODULE;
const loadModule = bindModuleToClassOnToken({
  module: credentialRepositoryModule,
  moduleToken,
  token,
  classs: CredentialRepository,
  dep: prismaModuleLoader,
});

export const moduleLoader: ModuleLoader = {
  token,
  loadModule,
};
