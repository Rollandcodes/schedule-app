import { getWebhookFeature } from "@schedule/features/di/webhooks/containers/webhook";
import type { Webhook } from "@schedule/features/webhooks/lib/dto/types";
import type { TrpcSessionUser } from "@schedule/trpc/server/types";
import type { TListInputSchema } from "./list.schema";

type ListOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TListInputSchema;
};

export const listHandler = async ({ ctx, input }: ListOptions): Promise<Webhook[]> => {
  const { repository } = getWebhookFeature();

  return repository.listWebhooks({
    userId: ctx.user.id,
    appId: input?.appId,
    eventTypeId: input?.eventTypeId,
    eventTriggers: input?.eventTriggers,
  });
};
