<template>
  <Modal
    title="Edytuj atrybut"
    :show="!modal.state.value.hidden"
    @close="modal.hide()"
  >
    <AttributeFormEdit
      :attribute-id="modal.state.value.context.attributeId"
      :initial-values="modal.state.value.context.initialValues"
    />
  </Modal>
</template>

<script setup lang="ts">
const modal = useAttributeModalEdit();
</script>
