import { DynamicComponent } from "@schedule/app-store/_components/DynamicComponent";
import dynamic from "next/dynamic";

export const AppSetupMap = {
  alby: dynamic(() => import("@schedule/web/components/apps/alby/Setup")),
  "apple-calendar": dynamic(() => import("@schedule/web/components/apps/applecalendar/Setup")),
  exchange: dynamic(() => import("@schedule/web/components/apps/exchangecalendar/Setup")),
  "exchange2013-calendar": dynamic(() => import("@schedule/web/components/apps/exchange2013calendar/Setup")),
  "exchange2016-calendar": dynamic(() => import("@schedule/web/components/apps/exchange2016calendar/Setup")),
  "caldav-calendar": dynamic(() => import("@schedule/web/components/apps/caldavcalendar/Setup")),
  "ics-feed": dynamic(() => import("@schedule/web/components/apps/ics-feedcalendar/Setup")),
  make: dynamic(() => import("@schedule/web/components/apps/make/Setup")),
  sendgrid: dynamic(() => import("@schedule/web/components/apps/sendgrid/Setup")),
  stripe: dynamic(() => import("@schedule/web/components/apps/stripepayment/Setup")),
  paypal: dynamic(() => import("@schedule/web/components/apps/paypal/Setup")),
  hitpay: dynamic(() => import("@schedule/web/components/apps/hitpay/Setup")),
  btcpayserver: dynamic(() => import("@schedule/web/components/apps/btcpayserver/Setup")),
};

export const AppSetupPage = (props: { slug: string }) => {
  return <DynamicComponent<typeof AppSetupMap> componentMap={AppSetupMap} {...props} />;
};

export default AppSetupPage;
