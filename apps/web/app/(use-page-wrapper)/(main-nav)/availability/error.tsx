"use client";

import { useLocale } from "@schedule/lib/hooks/useLocale";
import { Alert } from "@schedule/ui/components/alert";

export default function Error() {
  const { t } = useLocale();
  return <Alert severity="error" title={t("something_went_wrong")} />;
}
