import type { Mock } from "vitest";
import { vi } from "vitest";

import {
  prismaMock,
  resetPrismaMock,
} from "@schedule/features/auth/signup/handlers/__tests__/mocks/prisma.mocks";
import {
  createMockTeam,
  createMockFoundToken,
} from "@schedule/features/auth/signup/handlers/__tests__/mocks/signup.factories";
import type { SignupBody } from "@schedule/features/auth/signup/handlers/__tests__/mocks/signup.factories";

const mockFindTokenByToken: Mock = vi.fn();
const mockValidateAndGetCorrectedUsernameForTeam: Mock = vi.fn();

vi.mock("next/server", async () => {
  const { createNextServerMock } = await import(
    "@schedule/features/auth/signup/handlers/__tests__/mocks/next.mocks"
  );
  return createNextServerMock();
});
vi.mock("@schedule/prisma", async () => {
  const { createPrismaMock } = await import(
    "@schedule/features/auth/signup/handlers/__tests__/mocks/prisma.mocks"
  );
  return createPrismaMock();
});
vi.mock("@schedule/prisma/client", async () => {
  const { createPrismaMock } = await import(
    "@schedule/features/auth/signup/handlers/__tests__/mocks/prisma.mocks"
  );
  return createPrismaMock();
});
vi.mock("@schedule/lib/logger", () => ({
  default: { getSubLogger: () => ({ warn: vi.fn(), error: vi.fn(), debug: vi.fn(), info: vi.fn() }) },
}));
vi.mock("@schedule/lib/auth/hashPassword", () => ({ hashPassword: vi.fn().mockResolvedValue("hashed") }));
vi.mock("@schedule/lib/slugify", () => ({ default: vi.fn((s: string) => s.toLowerCase()) }));
vi.mock("@schedule/lib/constants", () => ({ IS_PREMIUM_USERNAME_ENABLED: false }));
vi.mock("@schedule/lib/server/username", () => ({
  isUsernameReservedDueToMigration: vi.fn().mockResolvedValue(false),
}));
vi.mock("@schedule/features/auth/lib/verifyEmail", () => ({ sendEmailVerification: vi.fn() }));
vi.mock("@schedule/features/auth/signup/utils/createOrUpdateMemberships", () => ({
  createOrUpdateMemberships: vi.fn(),
}));
vi.mock("@schedule/features/auth/signup/utils/validateUsername", () => ({
  validateAndGetCorrectedUsernameAndEmail: vi.fn().mockResolvedValue({ isValid: true, username: "testuser" }),
}));
vi.mock("@schedule/features/auth/signup/utils/organization", () => ({ joinAnyChildTeamOnOrgInvite: vi.fn() }));
vi.mock("@schedule/features/auth/signup/utils/prefillAvatar", () => ({ prefillAvatar: vi.fn() }));
vi.mock("@schedule/features/auth/signup/utils/token", () => ({
  findTokenByToken: (...args: unknown[]) => mockFindTokenByToken(...args),
  throwIfTokenExpired: vi.fn(),
  validateAndGetCorrectedUsernameForTeam: (...args: unknown[]) =>
    mockValidateAndGetCorrectedUsernameForTeam(...args),
}));

// Import after mocks
import handler from "./selfHostedHandler";
import { runP2002TestSuite } from "@schedule/features/auth/signup/handlers/__tests__/p2002.test-suite";

function callHandler(body: SignupBody): ReturnType<typeof handler> {
  return handler(body as unknown as Record<string, string>);
}

runP2002TestSuite("selfHostedHandler", callHandler, () => {
  vi.clearAllMocks();
  resetPrismaMock();
  mockFindTokenByToken.mockResolvedValue(createMockFoundToken());
  mockValidateAndGetCorrectedUsernameForTeam.mockResolvedValue("testuser");
  prismaMock.team.findUnique.mockResolvedValue(createMockTeam() as never);
  prismaMock.verificationToken.delete.mockResolvedValue({} as never);
});
