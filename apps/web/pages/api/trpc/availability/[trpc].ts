import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { availabilityRouter } from "@schedule/trpc/server/routers/viewer/availability/_router";

export default createNextApiHandler(availabilityRouter);
