import { useProductAttributeStorage } from "./useProductAttributeStorage";

export const useCategoriesColumnVisibility = () => {
  return useColumnVisibility(
    "categories",
    ["id", "name", "type", "createdAt"],
    ["id", "name", "type"]
  );
};
