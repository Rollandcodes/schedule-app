import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { appsRouter } from "@schedule/trpc/server/routers/viewer/apps/_router";

export default createNextApiHandler(appsRouter);
