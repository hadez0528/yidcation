<template>
    <ProductForm @submit="onSubmit" submit-button-label="Dodaj" />
</template>

<script setup lang="ts">
const modal = useProductModalAdd()
const productStorage = useProductStorage()

const onSubmit = (values) => {
    const product = {
        id: getShortId(),
        name: values.name,
        description: values.description,
        price: values.price,
        quantity: values.quantity,
        attributes: {}
    }

    for (let attribute of values.attributes) {
        product.attributes[attribute[0]] = attribute[1]
    }

    productStorage.createEntity(product)
    modal.hide()
}
</script>