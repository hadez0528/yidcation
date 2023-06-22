<template>
    <TableCell class="!pt-0 !pb-0 text-left font-semibold text-sm text-tertiary" v-bind="$attrs">
        <div class="flex flex-row items-center">
            <span>
                <slot></slot>
            </span>
            <IconButton v-if="showSortButton" iconSrc="sort-column.svg" />
        </div>
    </TableCell>
</template>

<script setup lang="ts">
export interface Props {
    showSortButton?: boolean
}

withDefaults(defineProps<Props>(), {
    showSortButton: true
})
</script>