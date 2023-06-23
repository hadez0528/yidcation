<template>
    <TableHeadRow @settings="modal.show()">
        <TableHeadCell v-if="columnVisibility.isVisible('id')" @sort="sort.toggle('id')" class="!py-2">ID</TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('name')" @sort="sort.toggle('name')" class="!py-2">Nazwa kategorii
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('productCount')" @sort="sort.toggle('productCount')" class=" !py-2">
            Liczba
            produktów
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('createdAt')" @sort="sort.toggle('createdAt')" class="!py-2">Data
            utworzenia
        </TableHeadCell>
    </TableHeadRow>
</template>

<script setup lang="ts">
const sort = useCategoriesSort()
const modal = useCategoryTableColumnVisibilityModal()
const columnVisibility = useCategoriesColumnVisibility()
</script>