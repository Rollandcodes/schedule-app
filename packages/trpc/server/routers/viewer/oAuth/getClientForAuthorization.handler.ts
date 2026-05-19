import { getOAuthService } from "@schedule/features/oauth/di/OAuthService.container";
import type { OAuthErrorReason } from "@schedule/features/oauth/services/OAuthService";
import { OAUTH_ERROR_REASONS } from "@schedule/features/oauth/services/OAuthService";
import { ErrorWithCode } from "@schedule/lib/errors";
import { getHttpStatusCode } from "@schedule/lib/server/getServerErrorFromUnknown";
import { httpStatusToTrpcCode } from "@schedule/trpc/server/lib/toTRPCError";
import type { TrpcSessionUser } from "@schedule/trpc/server/types";
import { TRPCError } from "@trpc/server";
import type { TGetClientForAuthorizationInputSchema } from "./getClientForAuthorization.schema";

type GetClientForAuthorizationOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TGetClientForAuthorizationInputSchema;
};

export const getClientForAuthorizationHandler = async ({ ctx, input }: GetClientForAuthorizationOptions) => {
  try {
    const { clientId, redirectUri } = input;

    const oAuthService = getOAuthService();

    const oAuthClient = await oAuthService.getClientForAuthorization(clientId, redirectUri, ctx.user.id);

    return {
      clientId: oAuthClient.clientId,
      redirectUri: oAuthClient.redirectUri,
      name: oAuthClient.name,
      logo: oAuthClient.logo,
      isTrusted: oAuthClient.isTrusted,
    };
  } catch (error) {
    if (error instanceof ErrorWithCode) {
      throw new TRPCError({
        code: httpStatusToTrpcCode(getHttpStatusCode(error)),
        message: OAUTH_ERROR_REASONS[error?.data?.reason as OAuthErrorReason] ?? error.message,
        cause: error,
      });
    }
    throw error;
  }
};
