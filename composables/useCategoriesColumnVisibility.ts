export const useCategoriesColumnVisibility = () =>
  useColumnVisibility(
    "categories",
    ["id", "name", "productCount", "createdAt"],
    ["id", "name"]
  );
