import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { deploymentSetupRouter } from "@schedule/trpc/server/routers/viewer/deploymentSetup/_router";

export default createNextApiHandler(deploymentSetupRouter);
