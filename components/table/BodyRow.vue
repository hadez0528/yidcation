<template>
  <TableRow class="bg-gray-50" v-bind="$attrs">
    <slot></slot>
    <TableCell>
      <div class="flex flex-row gap-x-4 justify-end items-center h-full">
        <ButtonIcon icon-src="brush.svg" @click="emit('edit')" />
        <ButtonIcon icon-src="trash.svg" @click="emit('delete')" />
      </div>
    </TableCell>
  </TableRow>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  edit: [];
  delete: [];
}>();
</script>
