<template>
    <NuxtLayout name="products">
        <ProductFilterBox />
        <ProductBox />
    </NuxtLayout>
    <ProductTableColumnVisibilitySelect />
</template>

<script setup lang="ts">
useHead({
    title: 'AnimalHouses - Products'
})
</script>