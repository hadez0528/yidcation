<template>
    <TableBodyRow>
        <TableCell>{{ id }}</TableCell>
        <TableCell>{{ name }}</TableCell>
        <TableCell>{{ category }}</TableCell>
        <TableCell>{{ fitterPlace }}</TableCell>
        <TableCell>{{ price }} PLN</TableCell>
        <TableCell>{{ quantity }} szt.</TableCell>
    </TableBodyRow>
</template>

<script setup lang="ts">
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