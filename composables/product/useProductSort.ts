const byDynamicAttribute = ref(true);

export const useProductSort = () => {
  const sort = useSort("product");

  const compareFunc = sort.compareFuncFactory<Product>((entity) => {
    const value = byDynamicAttribute.value
      ? entity.attributes[sort.state.value.attributeKey]
      : entity[sort.state.value.attributeKey];

    return value;
  });

  return {
    ...sort,
    compareFunc,
    byDynamicAttribute,
  };
};
