<template>
    <TableBodyRow>
        <TableCell>{{ id }}</TableCell>
        <TableCell>{{ name }}</TableCell>
        <TableCell>{{ productCount }}</TableCell>
        <TableCell>{{ createdAt }}</TableCell>
        <TableCell>
            <div class="flex flex-row gap-x-4 justify-end items-center h-full">
                <IconButton iconSrc="brush.svg" />
                <IconButton iconSrc="trash.svg" />
            </div>
        </TableCell>
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