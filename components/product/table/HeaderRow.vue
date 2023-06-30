<template>
  <TableHeadRow @settings="modal.show()">
    <template
      v-for="column in columnVisibility.state.value.columns"
      :key="column"
    >
      <TableHeadCell
        v-if="columnVisibility.isVisible(column)"
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
const tableSort = useProductTableSort();
const modal = useProductModalTableColumnVisibility();
const columnVisibility = useProductTableColumnVisibility();
const attributeStorage = useAttributeStorage();

const handleToggleSort = (attributeKey: string) => {
  if (["name", "price", "quantity", "createdAt"].includes(attributeKey)) {
    tableSort.byDynamicAttribute.value = false;
    tableSort.toggle(attributeKey);
  } else {
    tableSort.byDynamicAttribute.value = true;
    tableSort.toggle(attributeStorage.getEntityByName(attributeKey).id);
  }
};
</script>
