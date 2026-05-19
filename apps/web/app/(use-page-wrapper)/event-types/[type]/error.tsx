"use client";

import { useLocale } from "@schedule/lib/hooks/useLocale";
import { Alert } from "@schedule/ui/components/alert";

import Shell from "~/shell/Shell";

export default function Error() {
  const { t } = useLocale();
  return (
    <Shell>
      <Alert severity="error" title={t("something_went_wrong")} />
    </Shell>
  );
}
