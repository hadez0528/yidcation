<template>
  <Button class="!py-1 !px-1" v-bind="$attrs">
    <img
      class="w-6 h-6"
      style="min-width: 16px"
      :src="iconSrc"
      width="24"
      height="24"
    />
  </Button>
</template>

<script setup lang="ts">
export interface Props {
  iconSrc: string;
}

defineProps<Props>();
</script>
