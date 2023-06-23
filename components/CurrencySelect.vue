<template>
    <Field @change="handleChangeCurrency" is="select" name="currency" v-bind="$attrs">
        <option v-for="currencyCode in ['PLN', 'EUR', 'USD']" :key="currencyCode" :value="currencyCode"
            :selected="currencyCode === currency.code.value">{{ currencyCode }}
        </option>
    </Field>
</template>

<script setup lang="ts">
const currency = useCurrency()

const handleChangeCurrency = (e: any) => {
    currency.code.value = e.target.value
}
</script>