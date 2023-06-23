<template>
    <TableRow>
        <TableHeadCell @sort="sort.toggle('id')" class="!py-2">ID</TableHeadCell>
        <TableHeadCell @sort="sort.toggle('name')" class="!py-2">Nazwa kategorii</TableHeadCell>
        <TableHeadCell @sort="sort.toggle('productCount')" class=" !py-2">Liczba produktów</TableHeadCell>
        <TableHeadCell @sort="sort.toggle('createdAt')" class="!py-2">Data utworzenia</TableHeadCell>
        <TableHeadCell class="!py-2" :show-sort-button="false"></TableHeadCell>
    </TableRow>
</template>

<script setup lang="ts">
const sort = useCategoriesSort()

</script>