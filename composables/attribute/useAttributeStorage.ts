export const useAttributeStorage = () =>
  useStorage("productAttributes", [
    {
      id: getShortId(),
      name: "Kategoria",
      type: "select",
      valueIndex: null,
      values: ["Psy", "Koty", "Sarny", "Szczury"],
      createdAt: getCurrentDateString(),
    },
    {
      id: getShortId(),
      name: "Izolacja",
      type: "select",
      valueIndex: null,
      values: ["Wewnętrzna", "Zewnętrzna"],
      createdAt: getCurrentDateString(),
    },
    {
      id: getShortId(),
      name: "Miejsce montażu",
      type: "select",
      valueIndex: null,
      values: ["Ziemia", "Drzewo"],
      createdAt: getCurrentDateString(),
    },
  ]);
