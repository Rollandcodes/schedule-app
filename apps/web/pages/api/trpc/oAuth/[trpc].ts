import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { oAuthRouter } from "@schedule/trpc/server/routers/viewer/oAuth/_router";

export default createNextApiHandler(oAuthRouter);
