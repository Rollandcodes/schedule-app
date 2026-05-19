import { EventLimitsTab } from "@schedule/features/eventtypes/components/tabs/limits/EventLimitsTab";
import type { EventLimitsTabProps } from "@schedule/features/eventtypes/components/tabs/limits/EventLimitsTab";

const EventLimitsTabWebWrapper = (props: EventLimitsTabProps) => {
  return <EventLimitsTab {...props} />;
};

export default EventLimitsTabWebWrapper;
