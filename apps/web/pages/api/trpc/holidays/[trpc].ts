import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { holidaysRouter } from "@schedule/trpc/server/routers/viewer/holidays/_router";

export default createNextApiHandler(holidaysRouter);
