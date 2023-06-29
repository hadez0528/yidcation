export const convertNonDynamicColumnName = (columnName: string) => {
  const t = {
    id: "ID",
    name: "Nazwa",
    price: "Cena",
    quantity: "Ilośc",
    createdAt: "Data utworzenia",
    type: "Typ",
  };
  return t.hasOwnProperty(columnName) ? t[columnName] : columnName;
};
