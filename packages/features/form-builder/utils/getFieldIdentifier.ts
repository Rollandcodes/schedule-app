import { getValidRhfFieldName } from "@schedule/lib/getValidRhfFieldName";

export const getFieldIdentifier = (name: string) => {
  return getValidRhfFieldName(name);
};
