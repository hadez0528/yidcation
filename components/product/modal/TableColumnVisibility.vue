<template>
    <Modal title="Widoczność kolumn" :show="!modal.state.value.hidden" @close="modal.hide()">
        <TableColumnVisibilitySelect :columns="columnVisibility.state.value.columns"
            :is-visible="columnVisibility.isVisible"
            @toggle="(columnName) => columnVisibility.toggleColumnVisibility(columnName)" @reset="columnVisibility.reset" />
    </Modal>
</template>

<script setup lang="ts">
const columnVisibility = useProductTableColumnVisibility()
const modal = useProductModalTableColumnVisibility()
</script>