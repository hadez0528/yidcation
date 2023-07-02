<template>
  <TableHeadRow @settings="modal.show()">
    <template
      v-for="column in columnVisibility.visibleColumns.value"
      :key="column"
    >
      <TableHeadCell
        :show-sort-button="column !== 'id'"
        class="!py-2"
        @sort="() => handleToggleSort(column)"
      >
        {{ translateColumnName(column) }}
      </TableHeadCell>
    </template>
  </TableHeadRow>
</template>

<script setup lang="ts">
const sort = useProductSort();
const modal = useProductModalTableColumnVisibility();
const columnVisibility = useProductTableColumnVisibility();
const attributeStorage = useAttributeStorage();

const handleToggleSort = (attributeKey: string) => {
  if (["name", "price", "quantity", "createdAt"].includes(attributeKey)) {
    sort.byDynamicAttribute.value = false;
    sort.toggle(attributeKey);
  } else {
    sort.byDynamicAttribute.value = true;
    sort.toggle(attributeStorage.getEntityByName(attributeKey).id);
  }
};
</script>
