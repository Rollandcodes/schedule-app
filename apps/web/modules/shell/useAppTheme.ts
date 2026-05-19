"use client";

import getBrandColours from "@schedule/lib/getBrandColours";
import useTheme from "@schedule/lib/hooks/useTheme";
import useMeQuery from "@schedule/trpc/react/hooks/useMeQuery";
import { useCalcomTheme } from "@schedule/ui/styles";

export const useAppTheme = () => {
  const { data: user } = useMeQuery();
  const brandTheme = getBrandColours({
    lightVal: user?.brandColor,
    darkVal: user?.darkBrandColor,
  });
  useCalcomTheme(brandTheme);
  useTheme(user?.appTheme);
};
