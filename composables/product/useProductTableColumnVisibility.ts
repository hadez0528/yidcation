export const useProductTableColumnVisibility = () =>
  useTableColumnVisibility(
    "product",
    ["id", "name", "category", "fitterPlace", "price", "quantity"],
    ["id", "name", "category", "fitterPlace", "price", "quantity"],
    6
  );
