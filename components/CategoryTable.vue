<template>
    <Table>
        <template v-slot:header>
            <CategoryTableHeaderRow />
        </template>
        <template v-slot:body>
            <CategoryTableBodyRow v-for="category in categories" :key="category.id" :id="category.id" :name="category.name"
                :productCount="category.productCount" :createdAt="category.createdAt" />
        </template>
    </Table>
</template>

<script setup lang="ts">
const categories = ref([
    {
        id: 123,
        name: 'Psy',
        productCount: 16,
        createdAt: '18.02.2024',
    },
    {
        id: 321,
        name: 'Koty',
        productCount: 16,
        createdAt: '18.02.2024',
    },
])
</script>
