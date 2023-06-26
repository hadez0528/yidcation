<template>
    <TableHeadRow @settings="modal.show()">
        <template v-for="column in columnVisibility.state.value.columns" :key="column">
            <TableHeadCell v-if="columnVisibility.isVisible(column)" @sort="sort.toggle(column)" class="!py-2">
                {{ column }}
            </TableHeadCell>
        </template>
    </TableHeadRow>
</template>

<script setup lang="ts">
const sort = useProductTableSort()
const modal = useProductModalTableColumnVisibility()
const columnVisibility = useProductTableColumnVisibility()
</script>