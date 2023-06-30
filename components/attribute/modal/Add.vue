<template>
  <Modal
    title="Dodaj atrybut"
    :show="!modal.state.value.hidden"
    @close="modal.hide()"
  >
    <AttributeFormAdd />
  </Modal>
</template>

<script setup lang="ts">
const modal = useAttributeModalAdd();
</script>
