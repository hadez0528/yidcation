<template>
  <ProductForm submit-button-label="Dodaj" @submit="onSubmit" />
</template>

<script setup lang="ts">
const modal = useProductModalAdd();
const productStorage = useProductStorage();

const onSubmit = (values) => {
  const product = {
    id: getShortId(),
    name: values.name,
    description: values.description,
    price: values.price,
    quantity: values.quantity,
    attributes: {},
  };

  for (const attribute of values.attributes) {
    product.attributes[attribute[0]] = attribute[1];
  }

  productStorage.createEntity(product);
  modal.hide();
};
</script>
