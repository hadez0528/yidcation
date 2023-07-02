<template>
  <TableHeadRow @settings="modal.show()">
    <TableHeadCell
      v-for="column in columnVisibility.visibleColumns.value"
      :key="column"
      class="!py-2"
      :show-sort-button="column !== 'id'"
      @sort="sort.toggle(column)"
      >{{ translateColumnName(column) }}</TableHeadCell
    >
  </TableHeadRow>
</template>

<script setup lang="ts">
const sort = useAttributeSort();
const modal = useAttributeModalTableColumnVisibility();
const columnVisibility = useAttributeTableColumnVisibility();
</script>
