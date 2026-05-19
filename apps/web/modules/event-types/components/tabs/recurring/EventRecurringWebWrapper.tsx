import type { EventRecurringTabProps } from "@schedule/features/eventtypes/components/tabs/recurring/EventRecurringTab";
import { EventRecurringTab } from "@schedule/features/eventtypes/components/tabs/recurring/EventRecurringTab";

const EventRecurringWebWrapper = (props: EventRecurringTabProps) => {
  return <EventRecurringTab {...props} />;
};

export default EventRecurringWebWrapper;
