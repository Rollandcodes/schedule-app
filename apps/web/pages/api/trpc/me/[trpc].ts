import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { meRouter } from "@schedule/trpc/server/routers/viewer/me/_router";

export default createNextApiHandler(meRouter);
