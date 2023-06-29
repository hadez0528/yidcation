export enum TableSortType {
  asc,
  desc,
}

export type TableSortState = {
  isActive: boolean;
  attributeKey: string | null;
  type: TableSortType;
};

export const useTableSort = (tableName: string) => {
  const state = useState<TableSortState>(`${tableName}TableSort`, () => ({
    attributeKey: null,
    isActive: false,
    type: TableSortType.asc,
  }));

  const compareFuncFactory =
    <T>(getValueFunc: (entity: T) => string | number | Date) =>
    (a: T, b: T) => {
      const aValue = getValueFunc(a);
      const bValue = getValueFunc(b);

      if (state.value.type == TableSortType.asc) {
        if (aValue > bValue) {
          return 1;
        }

        if (aValue < bValue) {
          return -1;
        }
      }

      if (state.value.type === TableSortType.desc) {
        if (aValue > bValue) {
          return -1;
        }

        if (aValue < bValue) {
          return 1;
        }
      }

      return 0;
    };

  const compareDateStringFuncFactory = <T extends { createdAt: string }>() =>
    compareFuncFactory<T>((entity) => {
      const [year, month, day] = entity.createdAt.split("-");
      return new Date(Number(year), Number(month) - 1, Number(day));
    });

  const toggle = (attributeKey: string) => {
    state.value.isActive = true;
    state.value.attributeKey = attributeKey;
    state.value.type = Number(!state.value.type);
  };

  return {
    state,
    ...state.value,
    toggle,
    compareFuncFactory,
    compareDateStringFuncFactory,
  };
};
