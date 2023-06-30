<template>
  <Field
    is="select"
    name="currency"
    v-bind="$attrs"
    @change="handleChangeCurrency"
  >
    <option
      v-for="currencyCode in ['PLN', 'EUR', 'USD']"
      :key="currencyCode"
      :value="currencyCode"
      :selected="currencyCode === currency.state.value.code"
    >
      {{ currencyCode }}
    </option>
  </Field>
</template>

<script setup lang="ts">
const currency = useCurrency();

const handleChangeCurrency = (e: any) => {
  currency.state.value.code = e.target.value;
};
</script>
