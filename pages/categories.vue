<template>
    <NuxtLayout name="categories">
        <CategoryBox />
    </NuxtLayout>

    <!-- Modals -->
    <CategoryTableColumnVisibilityModal />
</template>

<script setup lang="ts">
useHead({
    title: 'AnimalHouses - Categories'
})
</script>