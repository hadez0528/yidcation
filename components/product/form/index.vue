<template>
    <Form @submit="values => emit('submit', values)" :validation-schema="validationSchema" class="flex flex-col gap-4"
        v-slot="{ resetForm }">
        <Field type="text" label="Nazwa produktu" name="name"
            v-bind="initialValues?.name && { defaultValue: initialValues.name }" />
        <Field style="max-height: 256px; min-height: 64px;" is="textarea" label="Opis" name="description"
            v-bind="initialValues?.description && { defaultValue: initialValues.description }" />
        <div class="flex flex-row gap-4">
            <Field class="w-full" is="select" label="Kategoria" name="category">
                <option value="2312">Psy</option>
            </Field>
            <Field class="w-full" is="select" label="Miejsce montażu" name="fitterPlace">
                <option value="2312">Ziemia</option>
            </Field>
            <Field class="w-full" is="select" label="Izolacja" default-value="" name="isolation">
                <option value="2312">Wewnętrzna</option>
                <option value="" selected>Brak</option>
            </Field>
        </div>
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

export interface Props {
    submitButtonLabel: string,
    initialValues?: {
        name?: string,
        description?: string,
        category?: string
        fitterPlace?: string,
        isolation?: string
        price?: number
        quantity?: number
    }
}

defineProps<Props>()

const emit = defineEmits<{ submit: [any] }>()
</script>