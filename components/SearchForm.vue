<template>
    <form class="flex flex-row ml-8 mr-auto">
        <Field @change="handleChangeSearchPhrase" name="search" type="search" placeholder="Wyszukaj coś.."
            class="rounded-e-none w-96" :value="currentSearchState.phrase" />
        <Field @change="handleChangeSearchRange" is="select" name="search-range"
            class="rounded-s-none border-l border-l-gray-100">
            <option value="all" :selected="currentSearchState.range === 'all'">Wszystko</option>
            <option value="categories" :selected="currentSearchState.range === 'categories'">Wszystko</option>
            <option value="products" :selected="currentSearchState.range === 'products'">Wszystko</option>
        </Field>
    </form>
</template>

<script setup lang="ts">
const search = useSearch()

const currentSearchState = search.state.value

const handleChangeSearchRange = (e: any) => {
    search.state.value.range = e.target.value
}

const handleChangeSearchPhrase = (e: any) => {
    search.state.value.phrase = e.target.value
    search.state.value.isActive = e.target.value === "" ? false : true
}
</script>