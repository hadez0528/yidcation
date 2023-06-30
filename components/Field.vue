<template>
  <div class="flex flex-col" :class="{ 'gap-y-1': label || errorMessage }">
    <div class="flex flex-col">
      <label
        v-if="label"
        :for="`${name}-input`"
        :class="{ 'text-red-500': errorMessage }"
        class="font-semibold text-sm text-secondary"
        >{{ label }}</label
      >
      <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
    </div>
    <component
      :is="is"
      v-if="is !== 'select'"
      :id="id"
      :value="value"
      :class="{
        '!border': errorMessage,
        '!border-red-500': errorMessage,
        '!border-solid': errorMessage,
        '!focus:border-red-500': errorMessage,
      }"
      class="focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent"
      v-bind="$attrs"
      @input="handleChange"
      @blur="handleBlur"
    />
    <component
      :is="is"
      v-else
      :id="id"
      :value="value"
      :class="{
        '!border': errorMessage,
        '!border-red-500': errorMessage,
        '!border-solid': errorMessage,
        '!focus:border-red-500': errorMessage,
      }"
      class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent"
      v-bind="$attrs"
      @input="handleChange"
      @blur="handleBlur"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

export interface Props {
  name: string;
  label?: string;
  error?: string;
  is?: "input" | "select" | "textarea";
  defaultValue?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  is: "input",
  label: null,
  error: null,
  defaultValue: null,
});

const name = toRef(props, "name");

const id = computed(() => `${props.name}-${props.is}`);

const { value, errorMessage, handleBlur, handleChange } = useField(
  name,
  undefined,
  {
    initialValue: props.defaultValue,
  }
);
</script>
