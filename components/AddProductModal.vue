<template>
    <Modal title="Dodaj produkt" @close="modal.hide()" :show="!modal.state.value.hidden">
        <AddProductForm />
    </Modal>
</template>

<script setup lang="ts">
const modal = useAddProductModal()
</script>