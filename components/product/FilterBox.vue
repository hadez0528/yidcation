<template>
    <Box class="lg:w-96 w-full" v-bind="$attrs">
        <div class="flex items-start justify-between">
            <BoxTitle>filtry</BoxTitle>
            <ButtonText class="lg:hidden" @click="handleToggle">{{ isHidden ? 'Pokaż' : 'Ukryj' }}</ButtonText>
        </div>
        <Form v-show="!isHidden" v-slot="{ resetForm }" class="mt-4 flex flex-col gap-y-4">
            <Field @change="(e: any) => handleChange(e, attribute.id)"
                v-for=" attribute  in  attributeStorage.entities.value " is="select" :name="attribute.name"
                :label="attribute.name">
                <option value="" selected>Dowolna wartość</option>
                <option v-for=" value  in  attribute.values " :value="value">{{ value }}</option>
            </Field>

            <div class="flex flex-row gap-4 lg:flex-col">
                <ButtonSecondary @click="(resetForm(), filter.resetFilter())" type="button" class="lg:w-full w-full">
                    Resetuj</ButtonSecondary>
            </div>
        </Form>
    </Box>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'

const filter = useFilter()
const attributeStorage = useAttributeStorage()

const isHidden = ref(false)

const handleChange = (e: any, attributeId: string) => {
    filter.setFilter(attributeId, e.target.value)
}

const handleToggle = () => isHidden.value = !isHidden.value
</script>