import { FilterSegmentRepository } from "@schedule/features/data-table/repositories/filterSegment";
import type { TCreateFilterSegmentInputSchema } from "@schedule/features/data-table/repositories/filterSegment.type";
import type { TrpcSessionUser } from "@schedule/trpc/server/types";

export const createFilterSegmentHandler = async ({
  ctx,
  input,
}: {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TCreateFilterSegmentInputSchema;
}) => {
  const repository = new FilterSegmentRepository();
  return await repository.create({
    userId: ctx.user.id,
    input,
  });
};
