const byDynamicAttribute = ref(true);

export const useProductTableSort = () => {
  const tableSort = useTableSort("product");

  const compareFunc = tableSort.compareFuncFactory<Product>((entity) => {
    const value = byDynamicAttribute.value
      ? entity.attributes[tableSort.state.value.attributeKey]
      : entity[tableSort.state.value.attributeKey];

    console.log(tableSort.state.value.attributeKey, value, entity);

    return value;
  });

  return {
    ...tableSort,
    compareFunc,
    byDynamicAttribute,
  };
};
