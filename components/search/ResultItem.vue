<template>
    <div @click="emit('click', id)"
        class="flex flex-row items-center hover:bg-gray-100 cursor-pointer bg-gray-50 gap-x-4 w-full p-4">
        <span class="text-base text-slate-700">{{ id }}</span>
        <span class="text-base text-slate-700 grow">{{ name }}</span>
        <img src="arrow-box.svg" width="32" height="32" />
    </div>
</template>

<script setup lang="ts">
export interface Props {
    id: string,
    name: string
}

defineProps<Props>()

const emit = defineEmits<{ click: [id: string] }>()
</script>