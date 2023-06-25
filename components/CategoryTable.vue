<template>
    <Table>
        <template v-slot:header>
            <CategoryTableHeaderRow />
        </template>
        <template v-slot:body>
            <CategoryTableBodyRow v-for="attribute in productAttributeStorage.entities.value" :key="attribute.id"
                :id="attribute.id" :name="attribute.name" :type="attribute.type" :createdAt="attribute.createdAt" />
        </template>
    </Table>
</template>

<script setup lang="ts">
const productAttributeStorage = useProductAttributeStorage()
</script>
