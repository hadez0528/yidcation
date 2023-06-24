<template>
    <Form @submit="onSubmit" :validation-schema="validationSchema" class="flex flex-col gap-4" v-slot="{ resetForm }">
        <Field type="text" label="Nazwa kategorii" name="name" />
        <PrimaryButton type="submit">Dodaj</PrimaryButton>
        <SecondaryButton @click="resetForm">Resetuj</SecondaryButton>
    </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'

const validationSchema = useCategoryValidationSchema()

const onSubmit = (values) => console.log(values)
</script>