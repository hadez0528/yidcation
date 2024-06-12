<template>
  <div class="flex flex-col gap-1">
    <span class="font-semibold text-sm text-secondary">Wartości</span>
    <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
    <div
      :class="{ 'border-red-500': errorMessage }"
      class="max-h-64 overflow-y-auto border rounded flex flex-col gap-4 p-4 border-gray-100"
    >
      <div
        v-for="(value, valueIndex) in values"
        :key="valueIndex"
        class="flex flex-row border gap-4 rounded border-gray-100 p-4"
      >
        <Field
          class="w-full"
          type="text"
          placeholder="Podaj wartość"
          :name="`value-${valueIndex}`"
          :default-value="value"
          @focusout="(e) => checkValue(e, valueIndex)"
          @change="changeValue($event.target.value, valueIndex)"
        />
        <ButtonIcon
          icon-src="/trash.svg"
          type="button"
          @click="removeValue(valueIndex)"
        />
      </div>
      <ButtonIcon
        type="button"
        class="border rounded border-gray-100 !py-4 hover:bg-gray-100"
        icon-src="/plus-box.svg"
        @click="addValue()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { isEmpty } from "@@/utils/isEmpty";

export interface Props {
  reset: boolean;
  errorMessage?: string;
  defaultValues?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  errorMessage: undefined,
  defaultValues: () => [],
});

const emit = defineEmits<{
  updateValues: [values: string[]];
}>();

const values = ref<string[]>([...props.defaultValues]);

!isEmpty(props.defaultValues) && emit("updateValues", props.defaultValues);

const addValue = () => values.value.push(`Value ${values.value.length + 1}`);

const removeValue = (valueIndex: number) => {
  values.value = values.value.filter((_, index) => index !== valueIndex);
};

const checkValue = (e: Event, valueIndex: number) => {
  const target = e.target as HTMLInputElement;
  if (target.value === "") {
    removeValue(valueIndex);
  }
};

const changeValue = (value: string, valueIndex: number) => {
  values.value[valueIndex] = value;
};

watch(
  values,
  (updatedValues: string[]) => {
    emit("updateValues", updatedValues);
  },
  { deep: true }
);

const { reset } = toRefs(props);
watch(reset, () => {
  values.value = [...props.defaultValues];
});
</script>
