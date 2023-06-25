<template>
    <Modal title="Dodaj atrybut" @close="modal.hide()" :show="!modal.state.value.hidden">
        <AttributeFormAdd />
    </Modal>
</template>

<script setup lang="ts">
const modal = useAddCategoryModal()
</script>
