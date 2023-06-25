<template>
    <TableHeadRow @settings="modal.show()">
        <TableHeadCell v-if="columnVisibility.isVisible('id')" @sort="sort.toggle('id')" class="!py-2"
            :show-sort-button="false">ID</TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('name')" @sort="sort.toggle('name')" class="!py-2">Nazwa atrybutu
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('type')" @sort="sort.toggle('type')" class=" !py-2">
            Typ
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('createdAt')" @sort="sort.toggle('createdAt')" class="!py-2">Data
            utworzenia
        </TableHeadCell>
    </TableHeadRow>
</template>

<script setup lang="ts">
const sort = useAttributeTableSort()
const modal = useAttributeModalTableColumnVisibility()
const columnVisibility = useAttributeTableColumnVisibility()
</script>