<template>
  <Box class="lg:w-96 w-full" v-bind="$attrs">
    <div class="flex items-start justify-between">
      <BoxTitle>filtry</BoxTitle>
      <ButtonText class="lg:hidden" @click="handleToggle">{{
        isHidden ? "Pokaż" : "Ukryj"
      }}</ButtonText>
    </div>
    <Form
      v-show="!isHidden"
      v-slot="{ resetForm }"
      class="mt-4 flex flex-col gap-y-4"
    >
      <Field
        is="select"
        v-for="attribute in attributeStorage.entities.value"
        :key="attribute.id"
        :name="attribute.name"
        :label="attribute.name"
        @change="(e: any) => handleChange(e, attribute.id)"
      >
        <option value="" selected>Dowolna wartość</option>
        <option v-for="value in attribute.values" :key="value" :value="value">
          {{ value }}
        </option>
      </Field>

      <div class="flex flex-row gap-4 lg:flex-col">
        <ButtonSecondary
          type="button"
          class="lg:w-full w-full"
          @click="resetForm(), filter.resetFilter()"
        >
          Resetuj</ButtonSecondary
        >
      </div>
    </Form>
  </Box>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";

const filter = useFilter();
const attributeStorage = useAttributeStorage();

const isHidden = ref(false);

const handleChange = (e: any, attributeId: string) => {
  filter.setFilter(attributeId, e.target.value);
};

const handleToggle = () => (isHidden.value = !isHidden.value);
</script>
