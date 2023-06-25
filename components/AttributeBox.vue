<template>
    <Box>
        <div class="flex flex-row align-start justify-between">
            <BoxTitle>Atrybuty</BoxTitle>
            <PrimaryButton @click="modal.show()">Dodaj atrybut</PrimaryButton>
        </div>
        <AttributeTable class="mt-2" />
    </Box>
</template>

<script setup lang="ts">
const modal = useAddCategoryModal()
</script>