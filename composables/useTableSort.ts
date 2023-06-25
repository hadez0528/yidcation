enum TableSortType {
  asc,
  desc,
}

export type TableSortState = {
  isActive: boolean;
  columnName: string | null;
  type: TableSortType;
};

export const useTableSort = (tableName: string) => {
  const state = useState<TableSortState>(`${tableName}TableSortState`, () => ({
    columnName: null,
    isActive: false,
    type: TableSortType.asc,
  }));

  const toggle = (columnName: string) => {
    state.value.isActive = true;
    state.value.columnName = columnName;

    if (columnName != state.value.columnName) {
      state.value.type = TableSortType.asc;
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
