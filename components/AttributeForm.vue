<template>
    <Form @submit="values => emit('submit', values)" :validation-schema="validationSchema" class="flex flex-col gap-4"
        v-slot="{ resetForm }">
        <Field type="text" label="Nazwa kategorii" name="name"
            v-bind="initialValues?.name && { defaultValue: initialValues.name }" />
        <PrimaryButton type="submit">{{ submitButtonLabel }}</PrimaryButton>
        <SecondaryButton @click="initialValues ? resetForm({ values: initialValues }) : resetForm()">Resetuj
        </SecondaryButton>
    </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'

const validationSchema = useCategoryValidationSchema()

export interface Props {
    submitButtonLabel: string
    initialValues?: {
        name?: string
    }
}

defineProps<Props>()

const emit = defineEmits<{ submit: [any] }>()
</script>