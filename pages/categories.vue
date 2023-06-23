<template>
    <NuxtLayout name="categories">
        <CategoryBox />
    </NuxtLayout>
    <CategoryTableColumnVisibilitySelect />
</template>

<script setup lang="ts">
const columns = ["id", "name", "createdAt", "productCount"]

useHead({
    title: 'AnimalHouses - Categories'
})
</script>