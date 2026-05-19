import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { slotsRouter } from "@schedule/trpc/server/routers/viewer/slots/_router";

export default createNextApiHandler(slotsRouter);
