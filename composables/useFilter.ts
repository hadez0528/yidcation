export interface FilterState {
  filters: Record<string, string>;
  isActive: boolean;
}

export const useFilter = () => {
  const state = useState<FilterState>("filter", () => ({
    filters: {},
    isActive: false,
  }));

  const setFilter = (attributeId: string, attributeValue: string) => {
    if (attributeValue === "") {
      delete state.value.filters[attributeId];
    } else {
      state.value.filters[attributeId] = attributeValue;
    }

    state.value.isActive = Object.keys(state.value.filters).length > 0;
  };

  const resetFilter = () => {
    state.value.filters = {};
    state.value.isActive = false;
  };

  const filterFunc = (product: Product) => {
    for (const [attributeId, attributeValue] of Object.entries(
      state.value.filters
    )) {
      if (attributeValue !== product.attributes[attributeId]) {
        return false;
      }
    }
    return true;
  };

  return {
    state,
    setFilter,
    resetFilter,
    filterFunc,
  };
};
