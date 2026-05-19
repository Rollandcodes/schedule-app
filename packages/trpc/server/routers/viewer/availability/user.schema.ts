import { z } from "zod";

import { stringOrNumber } from "@schedule/prisma/zod-utils";
import { stringToDayjsZod } from "@schedule/lib/dayjs";

export const ZUserInputSchema = z.object({
  username: z.string(),
  dateFrom: stringToDayjsZod,
  dateTo: stringToDayjsZod,
  eventTypeId: stringOrNumber.optional(),
  withSource: z.boolean().optional(),
});

export type TUserInputSchema = z.infer<typeof ZUserInputSchema>;
