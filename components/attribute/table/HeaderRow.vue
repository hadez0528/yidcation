<template>
  <TableHeadRow @settings="modal.show()">
    <TableHeadCell
      v-if="columnVisibility.isVisible('id')"
      class="!py-2"
      :show-sort-button="false"
      @sort="tableSort.toggle('id')"
      >ID</TableHeadCell
    >
    <TableHeadCell
      v-if="columnVisibility.isVisible('name')"
      class="!py-2"
      @sort="tableSort.toggle('name')"
      >Nazwa
    </TableHeadCell>
    <TableHeadCell
      v-if="columnVisibility.isVisible('type')"
      class="!py-2"
      @sort="tableSort.toggle('type')"
    >
      Typ
    </TableHeadCell>
    <TableHeadCell
      v-if="columnVisibility.isVisible('createdAt')"
      class="!py-2"
      @sort="tableSort.toggle('createdAt')"
    >
      Data utworzenia
    </TableHeadCell>
  </TableHeadRow>
</template>

<script setup lang="ts">
const tableSort = useAttributeTableSort();
const modal = useAttributeModalTableColumnVisibility();
const columnVisibility = useAttributeTableColumnVisibility();
</script>
