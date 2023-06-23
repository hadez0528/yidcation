<template>
    <TableBodyRow>
        <TableCell>{{ id }}</TableCell>
        <TableCell>{{ name }}</TableCell>
        <TableCell>{{ productCount }}</TableCell>
        <TableCell>{{ createdAt }}</TableCell>
    </TableBodyRow>
</template>

<script setup lang="ts">
export interface Props {
    id: number,
    name: string,
    productCount: number,
    createdAt: string,
}

defineProps<Props>()
</script>