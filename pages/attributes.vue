<template>
    <NuxtLayout name="attributes">
        <AttributeBox />
    </NuxtLayout>

    <!-- Modals -->
    <AttributeTableColumnVisibilityModal />
    <AddCategoryModal />
    <EditCategoryModal />
</template>

<script setup lang="ts">
useHead({
    title: 'AnimalHouses - Categories'
})
</script>