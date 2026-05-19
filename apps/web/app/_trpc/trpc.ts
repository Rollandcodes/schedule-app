"use client";

import type { AppRouter } from "@schedule/trpc/types/server/routers/_app";

import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});
