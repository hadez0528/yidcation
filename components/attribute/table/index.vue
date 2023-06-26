<template>
    <Table>
        <template v-slot:header>
            <AttributeTableHeaderRow />
        </template>
        <template v-slot:body>
            <AttributeTableBodyRow v-for="attribute in productAttributeStorage.entities.value" :key="attribute.id"
                :id="attribute.id" :values="attribute.values" :name="attribute.name" :type="attribute.type"
                :createdAt="attribute.createdAt" />
        </template>
    </Table>
</template>

<script setup lang="ts">
const productAttributeStorage = useProductAttributeStorage()
</script>
