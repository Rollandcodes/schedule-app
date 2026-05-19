import prismock from "@schedule/testing/lib/__mocks__/prisma";

import type { WatchlistType } from "@schedule/prisma/enums";

interface WatchlistInput {
  type: WatchlistType;
  value: string;
}

export const createWatchlistEntry = async (input: WatchlistInput) => {
  await prismock.watchlist.create({
    data: {
      ...input,
    },
  });
};
