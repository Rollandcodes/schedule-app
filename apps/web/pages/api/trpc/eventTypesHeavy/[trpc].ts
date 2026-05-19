import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { eventTypesRouter } from "@schedule/trpc/server/routers/viewer/eventTypes/heavy/_router";

export default createNextApiHandler(eventTypesRouter);
