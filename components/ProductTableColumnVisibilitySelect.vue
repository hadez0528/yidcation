<template>
    <TableColumnVisibilitySelect :columns="columnVisibility.columns" :is-visible="columnVisibility.isVisible"
        @toggle="(columnName) => columnVisibility.toggleColumnVisibility(columnName)" />
</template>

<script setup lang="ts">
const columnVisibility = useProductsColumnVisibility()
</script>