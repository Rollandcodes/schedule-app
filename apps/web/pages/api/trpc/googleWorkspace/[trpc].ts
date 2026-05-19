import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { googleWorkspaceRouter } from "@schedule/trpc/server/routers/viewer/googleWorkspace/_router";

export default createNextApiHandler(googleWorkspaceRouter);
