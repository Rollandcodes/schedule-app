import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { i18nRouter } from "@schedule/trpc/server/routers/viewer/i18n/_router";

export default createNextApiHandler(i18nRouter, true, "i18n");
