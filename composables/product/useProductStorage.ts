import defaultProducts from "~/assets/defaultProducts.json";

export const useProductStorage = () =>
  useStorage("product", [...defaultProducts]);
