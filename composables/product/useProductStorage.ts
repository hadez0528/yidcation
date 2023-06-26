import shortid from "shortid";

export const useProductStorage = () => {
  const productAttributeStorage = useAttributeStorage();

  const defaultAttributes = {};
  for (let attribute of productAttributeStorage.entities.value) {
    defaultAttributes[attribute.id] = attribute.values[0];
  }

  const productStorage = useStorage<Product>("products", [
    {
      id: shortid(),
      name: "Domek dwuczęściowy kolorowy",
      description: "Fajny domek",
      price: 120,
      quantity: 90,
      attributes: defaultAttributes,
      createdAt: getCurrentDateString(),
    },
  ]);

  return productStorage;
};
