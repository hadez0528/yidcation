<template>
  <div class="flex flex-col" :class="{ 'gap-y-1': label || errorMessage }">
    <div class="flex flex-col">
      <label
        v-if="label"
        :for="id"
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
      :class="errorClasses"
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
      :class="errorClasses"
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

const id = useId();

const { value, errorMessage, handleBlur, handleChange } = useField(
  name,
  undefined,
  {
    initialValue: props.defaultValue,
  }
);

const errorClasses = computed(() => {
  return {
    "!border": errorMessage.value,
    "!border-red-500": errorMessage.value,
    "!border-solid": errorMessage.value,
    "!focus:border-red-500": errorMessage.value,
  };
});
</script>
