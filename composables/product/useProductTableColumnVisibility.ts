export const useProductTableColumnVisibility = () => {
  const attributeStorage = useAttributeStorage();

  const attributeNames = computed(() => {
    return attributeStorage.entities.value.map((attribute) => attribute.name);
  });

  const columnVisibility = useTableColumnVisibility(
    "product",
    ["id", "name", "price", "quantity", "createdAt"],
    ["id", "name", "price", "quantity", "createdAt"],
    6
  );

  const columns = computed(() => {
    return [...columnVisibility.defaultVisibleColumns, ...attributeNames.value];
  });

  return {
    ...columnVisibility,
    columns,
  };
};
