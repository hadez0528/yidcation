<template>
    <TableHeadRow @settings="modal.show()">
        <TableHeadCell v-if="columnVisibility.isVisible('id')" @sort="tableSort.toggle('id')" class="!py-2"
            :show-sort-button="false">ID</TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('name')" @sort="tableSort.toggle('name')" class="!py-2">Nazwa
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('type')" @sort="tableSort.toggle('type')" class=" !py-2">
            Typ
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('createdAt')" @sort="tableSort.toggle('createdAt')" class="!py-2">
            Data
            utworzenia
        </TableHeadCell>
    </TableHeadRow>
</template>

<script setup lang="ts">
const tableSort = useAttributeTableSort()
const modal = useAttributeModalTableColumnVisibility()
const columnVisibility = useAttributeTableColumnVisibility()
</script>