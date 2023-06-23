<template>
    <TableHeadRow @settings="modal.show()">
        <TableHeadCell v-if="columnVisibility.isVisible('id')" @sort="sort.toggle('id')" class="!py-2">ID</TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('name')" @sort="sort.toggle('name')" class="!py-2">Nazwa produktu
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('category')" @sort="sort.toggle('category')" class="!py-2">Kategoria
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('fitterPlace')" @sort="sort.toggle('fitterPlace')" class="!py-2">
            Miejsce
            montażu</TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('price')" @sort="sort.toggle('price')" class="!py-2">Cena
        </TableHeadCell>
        <TableHeadCell v-if="columnVisibility.isVisible('quantity')" @sort="sort.toggle('quantity')" class="!py-2">Ilość
        </TableHeadCell>
    </TableHeadRow>
</template>

<script setup lang="ts">
const sort = useProductsSort()
const modal = useProductTableColumnVisibilityModal()
const columnVisibility = useProductsColumnVisibility()
</script>