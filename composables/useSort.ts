enum SortTypes {
  asc,
  desc,
}

export type SortState = {
  isActive: boolean;
  columnName: string | null;
  type: SortTypes;
};

export const useSort = (tableName: string) => {
  const state = useState<SortState>(`${tableName}TableSortState`, () => ({
    columnName: null,
    isActive: false,
    type: SortTypes.asc,
  }));

  const toggle = (columnName: string) => {
    state.value.isActive = true;
    state.value.columnName = columnName;

    if (columnName != state.value.columnName) {
      state.value.type = SortTypes.asc;
    } else {
      state.value.type = Number(!state.value.type);
    }
  };

  return {
    state,
    ...state.value,
    toggle,
  };
};
