export const useDataHandler = <T>(
  dataSource,
  searchResults,
  filterState,
  filterFunc,
  sortState,
  sortCompareFunc,
  sortCompareDateStringFunc
) => {
  const data = ref<T[]>([...dataSource.value]);

  watch(
    [dataSource, sortState],
    () => {
      const attributeKey = sortState.value.attributeKey;
      const compareFunc =
        attributeKey === "createdAt"
          ? sortCompareDateStringFunc
          : sortCompareFunc;
      data.value.sort(compareFunc);
    },
    { deep: true }
  );

  watch(
    [dataSource, searchResults, filterState],
    () => {
      if (searchResults.value.length > 0) {
        data.value = [...searchResults.value];
      } else {
        data.value = [...dataSource.value];
      }

      if (filterState.value.isActive) {
        data.value = data.value.filter(filterFunc);
      }
    },
    { deep: true }
  );

  return {
    data,
  };
};
