<template>
    <NuxtLayout name="attributes">
        <AttributeBox />
    </NuxtLayout>

    <!-- Modals -->
    <AttributeModalAdd />
    <AttributeModalEdit />
    <AttributeModalTableColumnVisibility />
</template>

<script setup lang="ts">
useHead({
    title: 'AnimalHouses - Attributes'
})
</script>