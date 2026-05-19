"use client";

import Link from "next/link";

import { useLocale } from "@schedule/lib/hooks/useLocale";
import { trpc } from "@schedule/trpc/react";
import { Badge } from "@schedule/ui/components/badge";

export default function UnconfirmedBookingBadge() {
  const { t } = useLocale();
  const { data: unconfirmedBookingCount } = trpc.viewer.me.bookingUnconfirmedCount.useQuery();
  if (!unconfirmedBookingCount) return null;
  return (
    <Link href="/bookings/unconfirmed">
      <Badge
        rounded
        title={t("unconfirmed_bookings_tooltip")}
        variant="orange"
        className="cursor-pointer hover:bg-orange-800 hover:text-orange-100">
        {unconfirmedBookingCount}
      </Badge>
    </Link>
  );
}
