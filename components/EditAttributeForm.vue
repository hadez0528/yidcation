<template>
    <AttributeForm @submit="onSubmit" :initial-values="initialValues" submit-button-label="Edytuj" />
</template>

<script setup lang="ts">
export interface Props {
    categoryId: number,
    initialValues: {
        name: string
    }
}

const props = defineProps<Props>()

const onSubmit = (values) => console.log(props.categoryId, values)
</script>