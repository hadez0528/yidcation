export const useProductTableColumnVisibility = () => {
  const attributeStorage = useAttributeStorage();

  const attributeNames = computed(() => {
    return attributeStorage.entities.value.map((attribute) => attribute.name);
  });

  const columnVisibility = useTableColumnVisibility(
    "product",
    ["id", "name", "price", "quantity", "createdAt", ...attributeNames.value],
    ["id", "name", "price", "quantity", "createdAt"],
    6
  );

  return columnVisibility;
};
