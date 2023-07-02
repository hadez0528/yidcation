export type TableColumnVisibilityState = {
  columns: string[];
  visibleColumns: string[];
};

export const useTableColumnVisibility = (
  tableName: string,
  columns: string[],
  defaultVisibleColumns: string[],
  maxVisibleColumns = 5,
  minVisibleColumns = 2
) => {
  const state = useState<TableColumnVisibilityState>(
    () => ({
      columns,
      visibleColumns: [...defaultVisibleColumns],
    }),
    `${tableName}ColumnVisibility`
  );

  const isVisible = (columnName: string) =>
    state.value.visibleColumns.includes(columnName);

  const toggleColumnVisibility = (columnName: string) => {
    if (
      isVisible(columnName) &&
      state.value.visibleColumns.length > minVisibleColumns
    ) {
      state.value.visibleColumns = state.value.visibleColumns.filter(
        (value) => value !== columnName
      );
    } else if (
      !isVisible(columnName) &&
      state.value.visibleColumns.length < maxVisibleColumns
    ) {
      state.value.visibleColumns.push(columnName);
    }
  };

  const reset = () => {
    state.value.visibleColumns = [...defaultVisibleColumns];
  };

  return {
    state,
    defaultVisibleColumns,
    toggleColumnVisibility,
    isVisible,
    reset,
  };
};
