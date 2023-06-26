<template>
    <AttributeForm @submit="onSubmit" submit-button-label="Dodaj" />
</template>

<script setup lang="ts">
const modal = useAttributeModalAdd()
const productAttributeStorage = useAttributeStorage()
const onSubmit = (values) => {
    productAttributeStorage.createEntity({
        name: values.name,
        type: values.type,
        values: values.values
    })
    modal.hide()
}
</script>