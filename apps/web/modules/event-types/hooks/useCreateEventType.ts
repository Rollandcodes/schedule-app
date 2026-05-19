import { useState } from "react";
import type { z } from "zod";

import { createEventTypeInput } from "@schedule/features/eventtypes/lib/types";
import { useDebounce } from "@schedule/lib/hooks/useDebounce";
import { useLocale } from "@schedule/lib/hooks/useLocale";
import { HttpError } from "@schedule/lib/http-error";
import type { EventType } from "@schedule/prisma/client";
import { trpc } from "@schedule/trpc/react";
import { useCreateEventTypeForm } from "@schedule/atoms/hooks/event-types/private/useCreateEventTypeForm";

export const useCreateEventType = (
  onSuccessMutation: (eventType: EventType) => void,
  onErrorMutation: (message: string) => void
) => {
  const utils = trpc.useUtils();
  const { t } = useLocale();
  const { form, isManagedEventType } = useCreateEventTypeForm();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const createMutation = trpc.viewer.eventTypesHeavy.create.useMutation({
    onSuccess: async ({ eventType }) => {
      onSuccessMutation(eventType);

      await utils.viewer.eventTypes.getEventTypesFromGroup.fetchInfinite({
        group: { teamId: eventType.teamId, parentId: eventType.parentId },
        searchQuery: debouncedSearchTerm,
        limit: 10,
      });

      form.reset();
    },
    onError: (err) => {
      let error = err.message;
      if (err instanceof HttpError) {
        error = `${err.statusCode}: ${err.message}`;
      }

      if (err.data?.code === "BAD_REQUEST") {
        error = `${err.data.code}: ${t("error_event_type_url_duplicate")}`;
      }

      if (err.data?.code === "UNAUTHORIZED") {
        error = `${err.data.code}: ${t("error_event_type_unauthorized_create")}`;
      }
      onErrorMutation(error);
    },
  });

  return { form, createMutation, isManagedEventType };
};
