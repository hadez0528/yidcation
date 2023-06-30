import defaultAttributes from "~/assets/defaultAttributes.json";

export const useAttributeStorage = () =>
  useStorage("attribute", [...defaultAttributes]);
