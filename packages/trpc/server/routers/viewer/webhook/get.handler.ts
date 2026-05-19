import { getWebhookFeature } from "@schedule/features/di/webhooks/containers/webhook";
import type { TrpcSessionUser } from "@schedule/trpc/server/types";
import type { TGetInputSchema } from "./get.schema";

type GetOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TGetInputSchema;
};

export const getHandler = async ({ ctx: _ctx, input }: GetOptions) => {
  const { repository: webhookRepository } = getWebhookFeature();
  return await webhookRepository.findByWebhookId(input.id || input.webhookId);
};
