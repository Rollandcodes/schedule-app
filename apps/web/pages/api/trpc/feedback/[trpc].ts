import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { feedbackRouter } from "@schedule/trpc/server/routers/viewer/feedback/_router";

export default createNextApiHandler(feedbackRouter);
