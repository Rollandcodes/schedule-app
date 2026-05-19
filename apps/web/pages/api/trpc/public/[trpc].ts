import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { publicViewerRouter } from "@schedule/trpc/server/routers/publicViewer/_router";

export default createNextApiHandler(publicViewerRouter, true);
