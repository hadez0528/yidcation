<template>
  <TableBodyRow @edit="modal.show({ productId: id, initialValues })">
    <TableCell v-if="columnVisibility.isVisible('id')">{{ id }}</TableCell>
    <TableCell v-if="columnVisibility.isVisible('name')">{{ name }}</TableCell>
    <TableCell v-if="columnVisibility.isVisible('category')">{{
      category
    }}</TableCell>
    <TableCell v-if="columnVisibility.isVisible('fitterPlace')">{{
      fitterPlace
    }}</TableCell>
    <TableCell v-if="columnVisibility.isVisible('price')"
      >{{ price }} PLN</TableCell
    >
    <TableCell v-if="columnVisibility.isVisible('quantity')"
      >{{ quantity }} szt.</TableCell
    >
  </TableBodyRow>
</template>

<script setup lang="ts">
const columnVisibility = useProductTableColumnVisibility();
const modal = useProductModalEdit();

export interface Props {
  id: number;
  name: string;
  category: string;
  fitterPlace: string;
  price: number;
  quantity: number;
}

const props = defineProps<Props>();

const initialValues = ref({
  name: props.name,
  price: props.price,
  quantity: props.quantity,
});
</script>
