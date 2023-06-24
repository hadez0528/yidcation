<template>
    <NuxtLayout name="categories">
        <CategoryBox />
    </NuxtLayout>

    <!-- Modals -->
    <CategoryTableColumnVisibilityModal />
    <AddCategoryModal />
    <EditCategoryModal />
</template>

<script setup lang="ts">
useHead({
    title: 'AnimalHouses - Categories'
})
</script>