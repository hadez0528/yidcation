<template>
    <NuxtLayout name="search">
        <Box class="w-full">
            <BoxTitle>produkty</BoxTitle>
            <p class="normal-case mt-4">Brak wyników wyszukiwania</p>
        </Box>
        <Box class="w-full">
            <BoxTitle>kategorie</BoxTitle>
            <p class="normal-case mt-4">Brak wyników wyszukiwania</p>
        </Box>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'AnimalHouses - Search'
})
</script>