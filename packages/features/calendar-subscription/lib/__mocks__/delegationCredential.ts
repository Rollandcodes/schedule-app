import { vi } from "vitest";

export const getCredentialForSelectedCalendar = vi.fn();

vi.mock("@schedule/app-store/delegationCredential", () => ({
  getCredentialForSelectedCalendar,
}));
