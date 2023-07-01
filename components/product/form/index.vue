<template>
  <Form
    v-slot="{ resetForm, setFieldValue }"
    :validation-schema="validationSchema"
    class="flex flex-col gap-4"
    @submit="(values) => emit('submit', values)"
  >
    <Field
      type="text"
      label="Nazwa"
      name="name"
      v-bind="initialValues?.name && { defaultValue: initialValues.name }"
    />
    <Field
      is="textarea"
      style="max-height: 256px; min-height: 64px"
      label="Opis"
      name="description"
      :default-value="initialValues.description"
    />

    <p class="text-md font-bold text-tertiary">Atrybuty</p>
    <ProductAttributeFields
      :default-attributes="
        initialValues?.attributes ? initialValues.attributes : {}
      "
      @update-attributes="
        (updatedAttributes) => setFieldValue('attributes', updatedAttributes)
      "
    />

    <div class="flex flex-row gap-4">
      <Field
        type="number"
        class="w-full"
        label="Cena"
        name="price"
        v-bind="initialValues?.price && { defaultValue: initialValues.price }"
      />
      <Field
        type="number"
        class="w-full"
        label="Ilość"
        name="quantity"
        v-bind="
          initialValues?.quantity && { defaultValue: initialValues.quantity }
        "
      />
    </div>
    <ButtonPrimary type="submit">{{ submitButtonLabel }}</ButtonPrimary>
    <ButtonSecondary
      @click="
        initialValues ? resetForm({ values: initialValues }) : resetForm()
      "
      >Resetuj
    </ButtonSecondary>
  </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";

const validationSchema = useProductValidationSchema();

export interface Props {
  submitButtonLabel: string;
  initialValues?: {
    name?: string;
    description?: string;
    price?: number;
    attributes?: ProductAttributes;
    quantity?: number;
  };
}

withDefaults(defineProps<Props>(), {
  initialValues: {
    description: "",
  },
});

const emit = defineEmits<{ submit: [any] }>();
</script>
