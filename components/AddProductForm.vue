<template>
    <Form @submit="onSubmit" :validation-schema="validationSchema" class="flex flex-col gap-4" v-slot="{ resetForm }">
        <Field type="text" label="Nazwa produktu" name="name" />
        <Field style="max-height: 256px; min-height: 64px;" is="textarea" label="Opis" name="description" value="" />
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
            <Field type="number" class="w-full" label="Cena" name="price" />
            <Field type="number" class="w-full" label="Ilość" name="quantity" />
        </div>
        <PrimaryButton type="submit">Dodaj</PrimaryButton>
        <SecondaryButton @click="resetForm">Resetuj</SecondaryButton>
    </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'

const validationSchema = useProductValidationSchema()

const onSubmit = (values) => console.log(values)
</script>