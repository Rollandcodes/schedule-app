import getEnabledAppsFromCredentials from "@schedule/app-store/_utils/getEnabledAppsFromCredentials";
import getApps, { type CredentialDataWithTeamName } from "@schedule/app-store/utils";
import handleDeleteCredential from "@schedule/features/credentials/handleDeleteCredential";

export type { TDependencyData } from "@schedule/app-store/_appRegistry";
export { BuildCalendarService } from "@schedule/app-store/applecalendar/lib";
export { BuildCalendarService as BuildIcsFeedCalendarService } from "@schedule/app-store/ics-feedcalendar/lib";
export type { CredentialOwner } from "@schedule/app-store/types";
export type { CredentialDataWithTeamName, LocationOption } from "@schedule/app-store/utils";
export { getAppFromSlug } from "@schedule/app-store/utils";

export { getApps };

export { handleDeleteCredential };

export type { App } from "@schedule/types/App";

export { getEnabledAppsFromCredentials };

export type { ConnectedApps } from "@schedule/app-store/_utils/getConnectedApps";
export { getConnectedApps } from "@schedule/app-store/_utils/getConnectedApps";
export { OAuth2UniversalSchema } from "@schedule/app-store/_utils/oauth/universalSchema";
export {
  CalendarAppDelegationCredentialClientIdNotAuthorizedError,
  CalendarAppDelegationCredentialConfigurationError,
  CalendarAppDelegationCredentialError,
  CalendarAppDelegationCredentialInvalidGrantError,
  CalendarAppDelegationCredentialNotSetupError,
  CalendarAppError,
} from "@schedule/lib/CalendarAppError";
export type { TServiceAccountKeySchema } from "@schedule/prisma/zod-utils";
export type { AppsStatus } from "@schedule/types/Calendar";
export type { CredentialPayload } from "@schedule/types/Credential";

// Delegation credentials removed (EE feature) — stub for API v2
export const DelegationCredentialRepository = {
  findByIdIncludeSensitiveServiceAccountKey(_args: {
    id: string;
  }): Promise<{ serviceAccountKey: { client_email: string; private_key: string } | null } | null> {
    return Promise.resolve(null);
  },
};

export { getUsersCredentialsIncludeServiceAccountKey } from "@schedule/app-store/delegationCredential";

// enrichUserWithDelegationConferencingCredentialsWithoutOrgId removed (EE feature) — stub for API v2
export async function enrichUserWithDelegationConferencingCredentialsWithoutOrgId(_args: {
  user: { credentials: unknown[]; [key: string]: unknown };
}): Promise<{ credentials: unknown[] }> {
  return { credentials: (_args.user.credentials as unknown[]) || [] };
}
