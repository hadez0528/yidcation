export interface FilterState {
  filters: { [attributeId: string]: string };
}

export const useFilter = () => {
  const state = useState<FilterState>("filterState", () => ({
    filters: {},
  }));

  const setFilter = (attributeId: string, attributeValue: string) => {
    if (
      attributeValue === "" &&
      state.value.filters.hasOwnProperty(attributeId)
    ) {
      delete state.value.filters[attributeId];
    } else if (attributeValue !== "") {
      state.value.filters[attributeId] = attributeValue;
    }
  };

  const resetFilter = () => {
    state.value.filters = {};
  };

  return {
    state,
    setFilter,
    resetFilter,
  };
};
