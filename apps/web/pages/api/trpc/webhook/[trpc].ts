import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { webhookRouter } from "@schedule/trpc/server/routers/viewer/webhook/_router";

export default createNextApiHandler(webhookRouter);
