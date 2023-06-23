<template>
    <TableRow class="bg-gray-50" v-bind="$attrs">
        <slot></slot>
        <TableCell>
            <div class="flex flex-row gap-x-4 justify-end items-center h-full">
                <IconButton iconSrc="brush.svg" @click="emit('edit')" />
                <IconButton iconSrc="trash.svg" @click="emit('delete')" />
            </div>
        </TableCell>
    </TableRow>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    edit: [],
    delete: []
}>()
</script>