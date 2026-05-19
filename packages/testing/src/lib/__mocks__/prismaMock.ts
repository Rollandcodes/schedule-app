import type { PrismaClient } from "@schedule/prisma";
import { beforeEach, vi } from "vitest";
import { type DeepMockProxy, mockDeep, mockReset } from "vitest-mock-extended";

const prisma = mockDeep<PrismaClient>() as unknown as DeepMockProxy<PrismaClient>;

vi.mock("@schedule/prisma", () => ({
  default: prisma,
  prisma,
  availabilityUserSelect: vi.fn(),
  userSelect: vi.fn(),
}));

beforeEach(() => {
  mockReset(prisma);
});

export default prisma;
