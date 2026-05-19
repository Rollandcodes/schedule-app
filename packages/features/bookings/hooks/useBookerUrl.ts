import { WEBAPP_URL, WEBSITE_URL } from "@schedule/lib/constants";

export const useBookerUrl = () => {
  return WEBSITE_URL ?? WEBAPP_URL;
};

export const useEmbedBookerUrl = () => {
  return WEBAPP_URL;
};
