<template>
    <Box class="m-4 w-fit">
        <BoxTitle>Kolumny</BoxTitle>
        <div class="flex flex-col gap-y-2 mt-4">
            <div v-for="column in columns" class="cursor-pointer p-4 w-96 border border-gray-50 rounded"
                :class="{ 'bg-gray-50': isVisible(column) }" @click="emit('toggle', column)">
                <p>{{ column }}</p>
            </div>
        </div>
    </Box>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    toggle: [columnName: string]
}>()

export interface Props {
    columns: string[]
    isVisible(columnName: string): boolean
}

defineProps<Props>()
</script>