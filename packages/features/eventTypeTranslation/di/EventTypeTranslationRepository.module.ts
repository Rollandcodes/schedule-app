import { bindModuleToClassOnToken, createModule, type ModuleLoader } from "@schedule/features/di/di";
import { moduleLoader as prismaModuleLoader } from "@schedule/features/di/modules/Prisma";
import { TRANSLATION_DI_TOKENS } from "@schedule/features/translation/di/tokens";

import { EventTypeTranslationRepository } from "../repositories/EventTypeTranslationRepository";

const thisModule = createModule();
const token = TRANSLATION_DI_TOKENS.EVENT_TYPE_TRANSLATION_REPOSITORY;
const moduleToken = TRANSLATION_DI_TOKENS.EVENT_TYPE_TRANSLATION_REPOSITORY_MODULE;
const loadModule = bindModuleToClassOnToken({
  module: thisModule,
  moduleToken,
  token,
  classs: EventTypeTranslationRepository,
  dep: prismaModuleLoader,
});

export const moduleLoader: ModuleLoader = {
  token,
  loadModule,
};

export type { EventTypeTranslationRepository };
