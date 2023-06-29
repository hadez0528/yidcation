export const useAttributeTableSort = () => {
  const tableSort = useTableSort("attribute");

  const compareFunc = tableSort.compareFuncFactory<ProductAttribute>(
    (entity) => entity[tableSort.state.value.attributeKey]
  );

  const compareDateStringFunc =
    tableSort.compareDateStringFuncFactory<ProductAttribute>();

  return {
    ...tableSort,
    compareFunc,
    compareDateStringFunc,
  };
};
