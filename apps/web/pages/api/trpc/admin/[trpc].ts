import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { adminRouter } from "@schedule/trpc/server/routers/viewer/admin/_router";

export default createNextApiHandler(adminRouter);
