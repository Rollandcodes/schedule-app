import { EventLimitsTab } from "@schedule/features/eventtypes/components/tabs/limits/EventLimitsTab";
import type { EventLimitsTabProps } from "@schedule/features/eventtypes/components/tabs/limits/EventLimitsTab";

const EventLimitsTabPlatformWrapper = (props: EventLimitsTabProps) => {
  return <EventLimitsTab {...props} />;
};

export default EventLimitsTabPlatformWrapper;
