import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { timezonesRouter } from "@schedule/trpc/server/routers/publicViewer/timezones/_router";

export default createNextApiHandler(timezonesRouter, true);
