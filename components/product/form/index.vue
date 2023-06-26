<template>
    <Form @submit="values => emit('submit', values)" :validation-schema="validationSchema" class="flex flex-col gap-4"
        v-slot="{ resetForm, errors, setFieldValue, meta }">
        <Field type="text" label="Nazwa" name="name" v-bind="initialValues?.name && { defaultValue: initialValues.name }" />
        <Field style="max-height: 256px; min-height: 64px;" is="textarea" label="Opis" name="description"
            :defaultValue="initialValues.description" />

        <p class="text-md font-bold text-tertiary">Atrybuty</p>
        <ProductAttributeFields :defaultAttributes="initialValues?.attributes ? initialValues.attributes : {}"
            @updateAttributes="(updatedValues) => setFieldValue('attributes', updatedValues)" />

        <div class="flex flex-row gap-4">
            <Field type="number" class="w-full" label="Cena" name="price"
                v-bind="initialValues?.price && { defaultValue: initialValues.price }" />
            <Field type="number" class="w-full" label="Ilość" name="quantity"
                v-bind="initialValues?.quantity && { defaultValue: initialValues.quantity }" />
        </div>
        <ButtonPrimary type="submit">{{ submitButtonLabel }}</ButtonPrimary>
        <ButtonSecondary @click="initialValues ? resetForm({ values: initialValues }) : resetForm()">Resetuj
        </ButtonSecondary>
    </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'

const validationSchema = useProductValidationSchema()
const attributeStorage = useAttributeStorage()

export interface Props {
    submitButtonLabel: string,
    initialValues?: {
        name?: string,
        description?: string,
        price?: number
        attributes?: ProductAttributes
        quantity?: number
    }
}

const props = withDefaults(defineProps<Props>(), {
    initialValues: {
        description: "",
    }
})

const emit = defineEmits<{ submit: [any] }>()
</script>