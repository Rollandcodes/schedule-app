import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { calVideoRouter } from "@schedule/trpc/server/routers/viewer/calVideo/_router";

export default createNextApiHandler(calVideoRouter);
