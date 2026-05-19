import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { loggedInViewerRouter } from "@schedule/trpc/server/routers/loggedInViewer/_router";

export default createNextApiHandler(loggedInViewerRouter);
