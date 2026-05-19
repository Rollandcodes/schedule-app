import { userMetadata } from "@schedule/prisma/zod-utils";
import type { TrpcSessionUser } from "@schedule/trpc/server/types";

type GetUsersDefaultConferencingAppOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
};

export const getUsersDefaultConferencingAppHandler = async ({
  ctx,
}: GetUsersDefaultConferencingAppOptions) => {
  return userMetadata.parse(ctx.user.metadata)?.defaultConferencingApp;
};
