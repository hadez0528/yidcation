export const useProductsColumnVisibility = () =>
  useColumnVisibility(
    "products",
    ["id", "name", "category", "fitterPlace", "price", "quantity"],
    ["id", "name", "category", "fitterPlace", "price", "quantity"],
    6
  );
