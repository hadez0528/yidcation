<template>
    <ProductForm @submit="onSubmit" :initial-values="initialValues" submit-button-label="Edytuj" />
</template>

<script setup lang="ts">
export interface Props {
    productId: number,
    initialValues: {
        name: string
        price: number
        quantity: number
    }
}

const props = defineProps<Props>()

const onSubmit = (values) => console.log(props.productId, values)
</script>