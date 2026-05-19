import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { calendarsRouter } from "@schedule/trpc/server/routers/viewer/calendars/_router";

export default createNextApiHandler(calendarsRouter);
