import { vi } from "vitest";

vi.mock("@schedule/features/bookings/components/Header", () => ({
  Header: ({ children }: { children: React.ReactNode }) => <div data-testid="header">{children}</div>,
}));
