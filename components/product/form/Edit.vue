<template>
    <ProductForm @submit="onSubmit" :initial-values="initialValues" submit-button-label="Edytuj" />
</template>

<script setup lang="ts">
const modal = useProductModalEdit()

export interface Props {
    productId: string,
    initialValues: {
        name: string
        description: string,
        price: number
        quantity: number,
        attributes: ProductAttributes
    }
}

const props = defineProps<Props>()

const onSubmit = (values) => {
    const productStorage = useProductStorage()

    const product = {
        id: props.productId,
        name: values.name,
        description: values.description,
        price: values.price,
        quantity: values.quantity,
        attributes: {}
    }

    for (let attribute of values.attributes) {
        product.attributes[attribute[0]] = attribute[1]
    }

    productStorage.updateEntity(product)

    modal.hide()
}
</script>