import type { EventRecurringTabProps } from "@schedule/features/eventtypes/components/tabs/recurring/EventRecurringTab";
import { EventRecurringTab } from "@schedule/features/eventtypes/components/tabs/recurring/EventRecurringTab";

const EventRecurringTabPlatformWrapper = (props: EventRecurringTabProps) => {
  return <EventRecurringTab {...props} />;
};

export default EventRecurringTabPlatformWrapper;
