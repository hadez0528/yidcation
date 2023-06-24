<template>
    <Modal title="Dodaj kategorie" @close="modal.hide()" :show="!modal.state.value.hidden">
        <AddCategoryForm />
    </Modal>
</template>

<script setup lang="ts">
const modal = useAddCategoryModal()
</script>
