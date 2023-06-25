<template>
    <Modal title="Edytuj produkt" :show="!modal.state.value.hidden" @close="modal.hide()">
        <ProductFormEdit :product-id="modal.state.value.context.productId"
            :initial-values="modal.state.value.context.initialValues" />
    </Modal>
</template>

<script setup lang="ts">
const modal = useEditProductModal()
</script>