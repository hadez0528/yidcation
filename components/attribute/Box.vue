<template>
    <Box>
        <div class="flex flex-row align-start justify-between">
            <BoxTitle>Atrybuty</BoxTitle>
            <ButtonPrimary @click="modal.show()">Dodaj atrybut</ButtonPrimary>
        </div>
        <AttributeTable class="mt-2" />
    </Box>
</template>

<script setup lang="ts">
const modal = useAttributeModalAdd()
</script>