import { EventTypeSelectComponent } from "@schedule/features/troubleshooter/components/EventTypeSelectComponent";
import { trpc } from "@schedule/trpc/react";

export { EventTypeSelectComponent };

export function EventTypeSelect(): JSX.Element {
  const { data: eventTypes, isPending } = trpc.viewer.eventTypes.listWithTeam.useQuery();

  return <EventTypeSelectComponent eventTypes={eventTypes ?? []} isPending={isPending} />;
}
