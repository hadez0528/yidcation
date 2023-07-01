<template>
  <TableBodyRow
    @edit="
      modal.show({ attributeId: id, initialValues: { name, type, values } })
    "
    @delete="attributeStorage.deleteEntity(id)"
  >
    <TableCell v-if="columnVisibility.isVisible('id')">{{ id }}</TableCell>
    <TableCell v-if="columnVisibility.isVisible('name')">{{ name }}</TableCell>
    <TableCell v-if="columnVisibility.isVisible('type')">{{ type }}</TableCell>
    <TableCell v-if="columnVisibility.isVisible('createdAt')">{{
      createdAt
    }}</TableCell>
  </TableBodyRow>
</template>

<script setup lang="ts">
const columnVisibility = useAttributeTableColumnVisibility();
const modal = useAttributeModalEdit();
const attributeStorage = useAttributeStorage();

export interface Props {
  id: string;
  name: string;
  type: ProductAttributeType;
  values: string[];
  createdAt: string;
}

defineProps<Props>();
</script>
