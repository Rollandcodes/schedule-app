import dynamic from "next/dynamic";

import { formatPrice } from "@schedule/lib/currencyConversions";

import type { EventPrice } from "@schedule/features/bookings/types";

const AlbyPriceComponent = dynamic(
  () => import("@schedule/app-store/alby/components/AlbyPriceComponent").then((m) => m.AlbyPriceComponent),
  {
    ssr: false,
  }
);

export const Price = ({ price, currency, displayAlternateSymbol = true }: EventPrice) => {
  if (price === 0) return null;

  const formattedPrice = formatPrice(price, currency);

  return currency !== "BTC" ? (
    <>{formattedPrice}</>
  ) : (
    <AlbyPriceComponent
      displaySymbol={displayAlternateSymbol}
      price={price}
      formattedPrice={formattedPrice}
    />
  );
};
