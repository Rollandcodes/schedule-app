import type { SelectedSlots } from "@schedule/prisma/client";

export type SelectedSlot = Pick<
  SelectedSlots,
  "id" | "uid" | "eventTypeId" | "slotUtcStartDate" | "slotUtcEndDate" | "releaseAt" | "isSeat"
>;
