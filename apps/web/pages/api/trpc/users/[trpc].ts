import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { userAdminRouter } from "@schedule/trpc/server/routers/viewer/users/_router";

export default createNextApiHandler(userAdminRouter);
