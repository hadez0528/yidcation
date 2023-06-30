<template>
  <Modal
    title="Dodaj produkt"
    :show="!modal.state.value.hidden"
    @close="modal.hide()"
  >
    <ProductFormAdd />
  </Modal>
</template>

<script setup lang="ts">
const modal = useProductModalAdd();
</script>
