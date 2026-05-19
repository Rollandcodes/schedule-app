import { createNextApiHandler } from "@schedule/trpc/server/createNextApiHandler";
import { bookingsRouter } from "@schedule/trpc/server/routers/viewer/bookings/_router";

export default createNextApiHandler(bookingsRouter);
