import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { travelSchedulesRouter } from "@schedule/trpc/server/routers/viewer/travelSchedules/_router";

export default createNextApiHandler(travelSchedulesRouter);
