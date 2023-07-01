<template>
  <AttributeForm submit-button-label="Dodaj" @submit="onSubmit" />
</template>

<script setup lang="ts">
const modal = useAttributeModalAdd();
const attributeStorage = useAttributeStorage();
const onSubmit = (values) => {
  attributeStorage.createEntity({
    name: values.name,
    type: values.type,
    values: values.values,
  });
  modal.hide();
};
</script>
