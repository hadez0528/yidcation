export const useAttributeTableColumnVisibility = () => {
  return useTableColumnVisibility(
    "attribute",
    ["id", "name", "type", "createdAt"],
    ["id", "name", "type"]
  );
};
