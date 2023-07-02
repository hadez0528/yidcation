export type TableColumnVisibilityState = {
  columns: string[];
  visibleColumns: string[];
};

export const useTableColumnVisibility = (
  tableName: string,
  availableColumns: string[],
  defaultVisibleColumns: string[],
  maxVisibleColumns = 5,
  minVisibleColumns = 2
) => {
  const state = useState<TableColumnVisibilityState>(
    () => ({
      columns: availableColumns,
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

  const columns = computed(() => state.value.columns);

  const visibleColumns = computed(() => state.value.visibleColumns);

  return {
    state,
    columns,
    visibleColumns,
    defaultVisibleColumns,
    toggleColumnVisibility,
    isVisible,
    reset,
  };
};
