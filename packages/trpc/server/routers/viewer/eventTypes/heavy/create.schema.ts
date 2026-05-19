import type { z } from "zod";

import { createEventTypeInput } from "@schedule/features/eventtypes/lib/schemas";

export const ZCreateInputSchema = createEventTypeInput;

export type TCreateInputSchema = z.infer<typeof ZCreateInputSchema>;
