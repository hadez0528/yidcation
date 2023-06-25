<template>
    <NuxtLayout name="products">
        <ProductFilterBox />
        <ProductBox />
    </NuxtLayout>

    <!-- Modals -->
    <ProductTableColumnVisibilityModal />
    <AddProductModal />
    <EditProductModal />
</template>

<script setup lang="ts">
import { useProductStorage } from '../composables/useProductStorage';

const productStorage = useProductStorage()
productStorage.createEntity({ name: 'awdaw', description: '', price: 100, quantity: 100, attributes: [] })

useHead({
    title: 'AnimalHouses - Products'
})
</script>