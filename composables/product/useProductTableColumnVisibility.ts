export const useProductTableColumnVisibility = () => {
  const productAttributeStorage = useAttributeStorage();

  const attributeNames = productAttributeStorage.entities.value.map(
    (attribute) => attribute.name
  );

  const columnVisibility = useTableColumnVisibility(
    "product",
    ["id", "name", "price", "quantity"],
    ["id", "name", "price", "quantity"],
    6
  );

  columnVisibility.state.value.columns = [
    ...columnVisibility.defaultVisibleColumns,
    ...attributeNames,
  ];

  return columnVisibility;
};
