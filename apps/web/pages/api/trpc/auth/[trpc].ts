import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { authRouter } from "@schedule/trpc/server/routers/viewer/auth/_router";

export default createNextApiHandler(authRouter);
