<template>
    <div class="flex flex-col gap-y-2 w-full max-h-64 overflow-y-auto">
        <div v-for="column in columns" class="cursor-pointer p-4 border border-gray-100 rounded"
            :class="{ 'bg-gray-100': isVisible(column) }" @click="emit('toggle', column)">
            <p class="normal-case">{{ translateColumnName(column) }}</p>
        </div>
    </div>
    <ButtonSecondary @click="emit('reset')">Resetuj</ButtonSecondary>
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