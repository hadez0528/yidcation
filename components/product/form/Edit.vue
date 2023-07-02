<template>
  <ProductForm
    :initial-values="initialValues"
    submit-button-label="Edytuj"
    @submit="onSubmit"
  />
</template>

<script setup lang="ts">
const modal = useProductModalEdit();
const productStorage = useProductStorage();

export interface Props {
  productId: string;
  initialValues: {
    name: string;
    description: string;
    price: number;
    quantity: number;
    attributes: ProductAttributes;
    createdAt: string;
  };
}

const props = defineProps<Props>();

const onSubmit = (values) => {
  const product = {
    id: props.productId,
    name: values.name,
    description: values.description,
    price: values.price,
    quantity: values.quantity,
    attributes: {},
    createdAt: props.initialValues.createdAt,
  };

  for (const attribute of values.attributes) {
    product.attributes[attribute[0]] = attribute[1];
  }

  productStorage.updateEntity(product);

  modal.hide();
};
</script>
