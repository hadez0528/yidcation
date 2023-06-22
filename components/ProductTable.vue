<template>
    <Table>
        <template v-slot:header>
            <ProductTableHeaderRow />
        </template>
        <template v-slot:body>
            <ProductTableBodyRow v-for="product in products" :key="product.id" :id="product.id" :name="product.name"
                :category="product.category" :fitterPlace="product.fitterPlace" :price="product.price"
                :quantity="product.quantity" />
        </template>
    </Table>
</template>

<script setup lang="ts">
const products = ref([
    {
        id: 123,
        name: 'Fajny domek',
        category: 'Psy',
        fitterPlace: 'Ziemia',
        price: 120,
        quantity: 1200
    }
])
</script>
