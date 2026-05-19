import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { credentialsRouter } from "@schedule/trpc/server/routers/viewer/credentials/_router";

export default createNextApiHandler(credentialsRouter);
