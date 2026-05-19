import type { FeatureId } from "@schedule/features/flags/config";
import { FeaturesRepository } from "@schedule/features/flags/features.repository";
import type { PrismaClient } from "@schedule/prisma";

import type { TrpcSessionUser } from "../../../types";
import type { TAdminAssignFeatureToTeamSchema } from "./assignFeatureToTeam.schema";

type AssignFeatureOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
    prisma: PrismaClient;
  };
  input: TAdminAssignFeatureToTeamSchema;
};

export const assignFeatureToTeamHandler = async ({ ctx, input }: AssignFeatureOptions) => {
  const { prisma, user } = ctx;
  const { teamId, featureId } = input;

  const featuresRepository = new FeaturesRepository(prisma);
  await featuresRepository.setTeamFeatureState({
    teamId,
    featureId: featureId as FeatureId,
    state: "enabled",
    assignedBy: `user:${user.id}`,
  });

  return { success: true };
};

export default assignFeatureToTeamHandler;
