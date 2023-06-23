export type ColumnVisibilityState = {
  columns: string[];
  visibleColumns: string[];
};

export const useColumnVisibility = (
  tableName: string,
  columns: string[],
  defaultVisibleColumns: string[],
  maxVisibleColumns: number = 5,
  minVisibleColumns: number = 2
) => {
  const state = useState<ColumnVisibilityState>(
    `${tableName}ColumnVisibility`,
    () => ({
      columns,
      visibleColumns: [...defaultVisibleColumns],
    })
  );

  const isVisible = (columnName: string) =>
    state.value.visibleColumns.includes(columnName);

  const toggleColumnVisibility = (columnName: string) => {
    if (isVisible(columnName)) {
      if (state.value.visibleColumns.length <= minVisibleColumns) return;

      state.value.visibleColumns = state.value.visibleColumns.filter(
        (value) => value != columnName
      );
    } else {
      if (state.value.visibleColumns.length > maxVisibleColumns) return;

      state.value.visibleColumns.push(columnName);
    }
  };

  const reset = () => {
    state.value.visibleColumns = [...defaultVisibleColumns];
  };

  return {
    state,
    ...state.value,
    toggleColumnVisibility,
    isVisible,
    reset,
  };
};
