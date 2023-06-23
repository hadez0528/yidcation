<template>
    <NuxtLayout name="products">
        <ProductFilterBox />
        <ProductBox />
    </NuxtLayout>

    <!-- Modals -->
    <ProductTableColumnVisibilityModal />
</template>

<script setup lang="ts">
useHead({
    title: 'AnimalHouses - Products'
})
</script>