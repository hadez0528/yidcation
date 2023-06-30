<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-x-2 px-8 py-4 text-left bg-secondary hover:bg-secondary/90 cursor-pointer w-full"
  >
    <img :src="iconSrc" :alt="name" width="42" height="42" />
    <span class="text-lg text-white">{{ name }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
export interface Props {
  name: string;
  iconSrc: string;
  to: string;
}

defineProps<Props>();
</script>
