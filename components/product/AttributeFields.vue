<template>
  <div class="flex flex-col gap-4 max-h-32 overflow-y-auto">
    <Field
      is="select"
      v-for="attribute in attributeStorage.entities.value"
      :key="attribute.id"
      :name="attribute.name"
      :label="attribute.name"
      v-bind="
        attribute.id in defaultAttributes
          ? { defaultValue: defaultAttributes[attribute.id] }
          : {}
      "
      @change="(e) => changeAttribute(e, attribute.id)"
    >
      <option
        v-for="value in attribute.values"
        :key="value"
        :value="value"
        :selected="
          attribute.id in defaultAttributes &&
          defaultAttributes[attribute.id] === value
        "
      >
        {{ value }}
      </option>
    </Field>
  </div>
</template>

<script setup lang="ts">
const attributeStorage = useAttributeStorage();

export interface Props {
  defaultAttributes: ProductAttributes;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  updateAttributes: [ProductAttributes];
}>();

const attributes = ref<ProductAttributes>({ ...props.defaultAttributes });
props.defaultAttributes &&
  emit("updateAttributes", Object.entries(attributes.value));

const changeAttribute = (e: any, attributeId: string) => {
  attributes.value[attributeId] = e.target.value;
  emit("updateAttributes", Object.entries(attributes.value));
};
</script>
