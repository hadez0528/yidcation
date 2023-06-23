<template>
    <div class="flex flex-col gap-y-2 mt-4 w-full">
        <div v-for="column in columns" class="cursor-pointer p-4 border border-gray-100 rounded"
            :class="{ 'bg-gray-100': isVisible(column) }" @click="emit('toggle', column)">
            <p class="normal-case">{{ column }}</p>
        </div>
        <SecondaryButton @click="emit('reset')">Resetuj</SecondaryButton>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    toggle: [columnName: string],
    reset: []
}>()

export interface Props {
    columns: string[]
    isVisible(columnName: string): boolean
}

defineProps<Props>()
</script>