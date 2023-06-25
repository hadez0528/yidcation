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
  ]);
