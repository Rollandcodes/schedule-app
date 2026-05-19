import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { featureFlagRouter } from "@schedule/trpc/server/routers/features/_router";

export default createNextApiHandler(featureFlagRouter, true, "features");
