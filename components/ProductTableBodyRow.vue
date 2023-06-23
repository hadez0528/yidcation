<template>
    <TableBodyRow>
        <TableCell v-if="columnVisibility.isVisible('id')">{{ id }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('name')">{{ name }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('category')">{{ category }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('fitterPlace')">{{ fitterPlace }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('price')">{{ price }} PLN</TableCell>
        <TableCell v-if="columnVisibility.isVisible('quantity')">{{ quantity }} szt.</TableCell>
    </TableBodyRow>
</template>

<script setup lang="ts">
const columnVisibility = useProductsColumnVisibility()

export interface Props {
    id: number,
    name: string,
    category: string,
    fitterPlace: string,
    price: number,
    quantity: number
}

defineProps<Props>()
</script>