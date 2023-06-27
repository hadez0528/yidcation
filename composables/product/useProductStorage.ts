import shortid from "shortid";

export const useProductStorage = () => {
  const filter = useFilter();
  const attributeStorage = useAttributeStorage();

  const defaultAttributes = {};
  for (let attribute of attributeStorage.entities.value) {
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

  const getFilteredProducts = () => {
    const products = productStorage.entities.value.filter((product) => {
      for (let [attributeId, attributeValue] of Object.entries(
        filter.state.value.filters
      )) {
        if (attributeValue !== product.attributes[attributeId]) return false;
      }
      return true;
    });

    return products;
  };

  return {
    ...productStorage,
    getFilteredProducts,
  };
};
