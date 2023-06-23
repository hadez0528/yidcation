<template>
    <TableBodyRow>
        <TableCell v-if="columnVisibility.isVisible('id')">{{ id }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('name')">{{ name }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('productCount')">{{ productCount }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('createdAt')">{{ createdAt }}</TableCell>
    </TableBodyRow>
</template>

<script setup lang="ts">
const columnVisibility = useCategoriesColumnVisibility()

export interface Props {
    id: number
    name: string
    productCount: number
    createdAt: string
}

defineProps<Props>()
</script>