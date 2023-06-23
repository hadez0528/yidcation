<template>
    <TableRow>
        <TableHeadCell @sort="sort.toggle('id')" class="!py-2">ID</TableHeadCell>
        <TableHeadCell @sort="sort.toggle('name')" class="!py-2">Nazwa produktu</TableHeadCell>
        <TableHeadCell @sort="sort.toggle('category')" class="!py-2">Kategoria</TableHeadCell>
        <TableHeadCell @sort="sort.toggle('fitterPlace')" class="!py-2">Miejsce montażu</TableHeadCell>
        <TableHeadCell @sort="sort.toggle('price')" class="!py-2">Cena</TableHeadCell>
        <TableHeadCell @sort="sort.toggle('quantity')" class="!py-2">Ilość</TableHeadCell>
        <TableHeadCell @sort="sort.toggle()" class="!py-2" :show-sort-button="false"></TableHeadCell>
    </TableRow>
</template>

<script setup lang="ts">
const sort = useProductsSort()
</script>