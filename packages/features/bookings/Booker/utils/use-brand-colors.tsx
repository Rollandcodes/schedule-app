import useGetBrandingColours from "@schedule/lib/getBrandColours";
import useTheme from "@schedule/lib/hooks/useTheme";
import { useCalcomTheme } from "@schedule/ui/styles";

export const useBrandColors = ({
  brandColor,
  darkBrandColor,
  theme,
}: {
  brandColor?: string;
  darkBrandColor?: string;
  theme?: string | null;
}) => {
  const brandTheme = useGetBrandingColours({
    lightVal: brandColor,
    darkVal: darkBrandColor,
  });

  useCalcomTheme(brandTheme);
  useTheme(theme);
};
