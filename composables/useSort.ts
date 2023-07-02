export enum SortType {
  asc,
  desc,
}

export type SortState = {
  isActive: boolean;
  attributeKey: string | null;
  type: SortType;
};

export const useSort = (name: string) => {
  const state = useState<SortState>(`${name}Sort`, () => ({
    attributeKey: null,
    isActive: false,
    type: SortType.asc,
  }));

  const compareFuncFactory =
    <T>(getValueFunc: (entity: T) => string | number | Date) =>
    (a: T, b: T) => {
      const aValue = getValueFunc(a);
      const bValue = getValueFunc(b);

      if (state.value.type === SortType.asc) {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      }

      if (state.value.type === SortType.desc) {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }

      return 0;
    };

  const compareDateStringFunc = compareFuncFactory<{ createdAt: string }>(
    (entity) => {
      const [year, month, day] = entity.createdAt.split("-");
      return new Date(Number(year), Number(month) - 1, Number(day));
    }
  );

  const toggle = (attributeKey: string) => {
    state.value.isActive = true;
    state.value.attributeKey = attributeKey;
    state.value.type = Number(!state.value.type) as SortType;
  };

  return {
    state,
    toggle,
    compareFuncFactory,
    compareDateStringFunc,
  };
};
