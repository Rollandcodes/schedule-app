import { FilterSegmentRepository } from "@schedule/features/data-table/repositories/filterSegment";
import type { TListFilterSegmentsInputSchema } from "@schedule/features/data-table/repositories/filterSegment.type";
import type { TrpcSessionUser } from "@schedule/trpc/server/types";

export const listHandler = async ({
  ctx,
  input,
}: {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TListFilterSegmentsInputSchema;
}) => {
  const repository = new FilterSegmentRepository();
  return await repository.get({
    userId: ctx.user.id,
    tableIdentifier: input.tableIdentifier,
  });
};
