import { enrichUserWithDelegationCredentialsIncludeServiceAccountKey } from "@schedule/app-store/delegationCredential";
import { withSelectedCalendars } from "@schedule/lib/server/withSelectedCalendars";
import { availabilityUserSelect } from "@schedule/prisma";
import { prisma } from "@schedule/prisma";
import type { Prisma } from "@schedule/prisma/client";
import { credentialForCalendarServiceSelect } from "@schedule/prisma/selects/credential";

export async function findUsersForAvailabilityCheck({ where }: { where: Prisma.UserWhereInput }) {
  const user = await prisma.user.findFirst({
    where,
    select: {
      ...availabilityUserSelect,
      selectedCalendars: true,
      credentials: {
        select: credentialForCalendarServiceSelect,
      },
    },
  });

  if (!user) {
    return null;
  }

  return await enrichUserWithDelegationCredentialsIncludeServiceAccountKey({
    user: withSelectedCalendars(user),
  });
}
