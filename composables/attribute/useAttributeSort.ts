export const useAttributeSort = () => {
  const sort = useSort("attribute");

  const compareFunc = sort.compareFuncFactory<ProductAttribute>(
    (entity) => entity[sort.state.value.attributeKey]
  );

  return {
    ...sort,
    compareFunc,
  };
};
