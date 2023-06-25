<template>
    <Modal title="Edytuj atrybut" :show="!modal.state.value.hidden" @close="modal.hide()">
        <EditAttributeForm :attribute-id="modal.state.value.context.categoryId"
            :initial-values="modal.state.value.context.initialValues" />
    </Modal>
</template>

<script setup lang="ts">
const modal = useEditCategoryModal()
</script>