export const translateColumnName = (columnName: string) => {
  const t = {
    id: "ID",
    name: "Nazwa",
    price: "Cena",
    quantity: "Ilość",
    createdAt: "Data utworzenia",
    type: "Typ",
  };
  return columnName in t ? t[columnName] : columnName;
};
