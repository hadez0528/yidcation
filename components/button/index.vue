<template>
  <button
    v-bind="$attrs"
    class="font-semibold inline-flex items-center gap-x-2 leading-tight justify-center rounded px-8 py-2 text-sm"
  >
    <slot></slot>
  </button>
</template>
