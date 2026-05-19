import type { PlatformOAuthClient } from "@schedule/prisma/client";

export interface IPlatformOAuthClientRepository {
  getByUserId(userId: number): Promise<PlatformOAuthClient | null>;
}
