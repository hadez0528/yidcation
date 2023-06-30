<template>
  <TableRow>
    <slot></slot>
    <TableHeadCell class="!py-2" :show-sort-button="false" justify-right>
      <ButtonIcon
        icon-src="settings.svg"
        width="24"
        height="24"
        @click="emit('settings')"
      />
    </TableHeadCell>
  </TableRow>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  settings: [];
}>();
</script>
