<template>
    <Modal title="Widoczność kolumn" :show="!modal.state.value.hidden" @close="modal.hide()">
        <TableColumnVisibilitySelect :columns="columnVisibility.columns" :is-visible="columnVisibility.isVisible"
            @toggle="(columnName) => columnVisibility.toggleColumnVisibility(columnName)" @reset="columnVisibility.reset" />
    </Modal>
</template>

<script setup lang="ts">
const columnVisibility = useProductsColumnVisibility()
const modal = useProductTableColumnVisibilityModal()
</script>