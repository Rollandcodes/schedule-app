import { deleteStripeCustomer } from "@schedule/app-store/stripepayment/lib/customer";
import prisma from "@schedule/prisma";
import type { User } from "@schedule/prisma/client";

export async function deleteUser(user: Pick<User, "id" | "email" | "metadata">) {
  // If 2FA is disabled or totpCode is valid then delete the user from stripe and database
  await deleteStripeCustomer(user).catch(console.warn);
  // Remove my account
  // TODO: Move this to Repository pattern.
  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });
}
