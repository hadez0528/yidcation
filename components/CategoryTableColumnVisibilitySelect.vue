<template>
    <Box class="m-4 w-fit">
        <BoxTitle>Kolumny</BoxTitle>
        <div class="flex flex-col gap-y-2 mt-4">
            <div v-for="column in columnVisibility.columns" class="cursor-pointer p-4 w-96 border border-gray-50 rounded"
                :class="{ 'bg-gray-50': columnVisibility.isVisible(column) }"
                @click="() => columnVisibility.toggleColumnVisibility(column)">
                <p>{{ column }}</p>
            </div>
        </div>
    </Box>
</template>

<script setup lang="ts">
const columnVisibility = useCategoriesColumnVisibility()
</script>