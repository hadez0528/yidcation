<template>
    <form class="flex flex-row ml-8 mr-auto">
        <Field @change="handleChangePhrase" name="search" type="search" placeholder="Wyszukaj coś.."
            class="rounded-e-none w-96" :value="search.phrase" />
        <Field @change="handleChangeRange" is="select" name="search-range"
            class="rounded-s-none border-l border-l-gray-100">
            <option v-for="range in ['all', 'products', 'categories']" :key="range" :value="range"
                :selected="range == search.range">{{ range }}</option>
        </Field>
    </form>
</template>

<script setup lang="ts">
const search = useSearch()

const handleChangePhrase = (e: any) => {
    search.state.value.phrase = e.target.value
    search.state.value.isActive = e.target.value !== "" ? true : false
}

const handleChangeRange = (e: any) => {
    search.state.value.range = e.target.value
}
</script>