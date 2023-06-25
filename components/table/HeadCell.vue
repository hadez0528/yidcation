<template>
    <TableCell class="!pt-0 !pb-0 text-left font-semibold text-sm text-tertiary" v-bind="$attrs">
        <div class="flex flex-row items-center" :class="{ 'justify-end': justifyRight }">
            <span>
                <slot></slot>
            </span>
            <ButtonIcon v-if="showSortButton" @click="emit('sort')" iconSrc="sort-column.svg" />
        </div>
    </TableCell>
</template>

<script setup lang="ts">
export interface Props {
    showSortButton?: boolean
    justifyRight?: boolean
}

const emit = defineEmits<{
    sort: []
}>()

withDefaults(defineProps<Props>(), {
    showSortButton: true,
    justifyRight: false
})
</script>