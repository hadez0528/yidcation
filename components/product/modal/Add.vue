<template>
    <Modal title="Dodaj produkt" @close="modal.hide()" :show="!modal.state.value.hidden">
        <ProductFormAdd />
    </Modal>
</template>

<script setup lang="ts">
const modal = useProductModalAdd()
</script>