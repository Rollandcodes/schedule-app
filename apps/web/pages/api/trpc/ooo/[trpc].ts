import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { oooRouter } from "@schedule/trpc/server/routers/viewer/ooo/_router";

export default createNextApiHandler(oooRouter);
