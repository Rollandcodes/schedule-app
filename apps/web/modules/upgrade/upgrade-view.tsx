"use client";

import { useRouter } from "next/navigation";

import { useLocale } from "@schedule/lib/hooks/useLocale";
import type { RouterOutputs } from "@schedule/trpc/react";
import { trpc } from "@schedule/trpc/react";
import { Button } from "@schedule/ui/components/button";
import { EmptyScreen } from "@schedule/ui/components/empty-screen";
import { showToast } from "@schedule/ui/components/toast";

import Shell from "~/shell/Shell";

export type OrgUpgradeBannerProps = {
  data: RouterOutputs["viewer"]["me"]["getUserTopBanners"]["orgUpgradeBanner"];
};

export default function UpgradePage() {
  const { t } = useLocale();

  const router = useRouter();
  const publishOrgMutation = { mutate: (..._args: unknown[]) => {}, mutateAsync: async () => ({}), isPending: false };


  const upgradeData = { data: undefined as { canUpgrade?: boolean } | undefined };


  return (
    <Shell>
      <div className="max-w-(--breakpoint-lg)">
        {upgradeData.data ? (
          <EmptyScreen
            headline={t("your_upgrade_is_here")}
            description={t("your_upgrade_is_here_description")}
            Icon="circle-arrow-up"
            buttonRaw={
              <Button
                onClick={() => {
                  publishOrgMutation.mutate();
                }}>
                {t("upgrade")}
              </Button>
            }
          />
        ) : (
          <EmptyScreen
            headline={t("you_are_all_set")}
            description={t("you_are_all_set_description")}
            Icon="circle-check"
            buttonRaw={<Button href="mailto:support@cal.com">{t("contact_support")}</Button>}
          />
        )}
      </div>
    </Shell>
  );
}
