<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="z-50 w-full h-screen bg-gray-900/60 fixed flex items-center justify-center top-0 right-0 overflow-y-auto"
    >
      <Box class="max-w-lg w-full flex flex-col gap-y-4 m-4">
        <div class="flex flex-row justify-between w-full items-start">
          <BoxTitle>{{ title }}</BoxTitle>
          <ButtonIcon
            class="hover:rotate-180 duration-200"
            icon-src="close.svg"
            width="24"
            height="24"
            @click="emit('close')"
          />
        </div>
        <slot></slot>
      </Box>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  close: [];
}>();

export interface Props {
  title: string;
  show: boolean;
}

defineProps<Props>();
</script>
