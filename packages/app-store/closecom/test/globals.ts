import { vi } from "vitest";

vi.mock("@schedule/lib/logger", () => ({
  default: {
    getSubLogger: () => ({
      debug: vi.fn(),
      error: vi.fn(),
      log: vi.fn(),
    }),
  },
}));

vi.mock("@schedule/lib/crypto", () => ({
  symmetricDecrypt: () => `{
      "userApiKey": "test"
    }`,
}));

export {};
