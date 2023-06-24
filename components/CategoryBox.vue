<template>
    <Box>
        <div class="flex flex-row align-start justify-between">
            <BoxTitle>kategorie</BoxTitle>
            <PrimaryButton @click="modal.show()">Dodaj kategorię</PrimaryButton>
        </div>
        <CategoryTable class="mt-2" />
    </Box>
</template>

<script setup lang="ts">
const modal = useAddCategoryModal()
</script>