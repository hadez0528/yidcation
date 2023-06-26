export const useProductAttributeStorage = () =>
  useStorage("productAttributes", [
    {
      id: getShortId(),
      name: "Kategoria",
      type: "select",
      valueIndex: 0,
      values: ["Psy", "Koty", "Sarny", "Szczury"],
      createdAt: getCurrentDateString(),
    },
    {
      id: getShortId(),
      name: "Izolacja",
      type: "select",
      valueIndex: 0,
      values: ["Wewnętrzna", "Zewnętrzna"],
      createdAt: getCurrentDateString(),
    },
    {
      id: getShortId(),
      name: "Miejsce montażu",
      type: "select",
      valueIndex: 0,
      values: ["Ziemia", "Drzewo"],
      createdAt: getCurrentDateString(),
    },
  ]);
