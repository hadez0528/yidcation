<template>
  <form class="flex flex-row ml-8 mr-auto w-full max-w-md">
    <Field
      name="search-phrase"
      type="text"
      placeholder="Wyszukaj coś.."
      class="rounded-e-none w-full"
      :value="search.state.value.phrase"
      @input="handleChangePhrase"
    />
    <Field
      is="select"
      name="search-range"
      class="rounded-s-none border-l border-l-gray-100"
      @change="handleChangeRange"
    >
      <option
        v-for="[range, rangeName] in ranges"
        :key="range"
        :value="range"
        :selected="range === search.state.value.range"
      >
        {{ rangeName }}
      </option>
    </Field>
  </form>
</template>

<script setup lang="ts">
const search = useSearch();

const ranges = ref([
  ["all", "Wszystko"],
  ["products", "Produkty"],
  ["attributes", "Atrybuty"],
]);

const handleChangePhrase = (e: any) => {
  search.state.value.phrase = e.target.value;
  search.state.value.isActive = e.target.value !== "";
};

const handleChangeRange = (e: any) => {
  search.state.value.range = e.target.value;
};
</script>
