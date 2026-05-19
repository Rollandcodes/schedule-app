import type { AppListCardProps } from "@schedule/ui/components/app-list-card";
import { AppListCard } from "@schedule/ui/components/app-list-card";

export default function AppListCardPlatformWrapper(props: AppListCardProps) {
  const logo = `https://app.cal.com${props.logo}`;
  return <AppListCard {...props} logo={logo} />;
}
