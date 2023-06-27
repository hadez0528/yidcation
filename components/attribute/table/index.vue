<template>
    <Table>
        <template v-slot:header>
            <AttributeTableHeaderRow />
        </template>
        <template v-slot:body>
            <AttributeTableBodyRow v-for="attribute in attributeStorage.entities.value" :key="attribute.id"
                :id="attribute.id" :values="attribute.values" :name="attribute.name" :type="attribute.type"
                :createdAt="attribute.createdAt" />
        </template>
    </Table>
</template>

<script setup lang="ts">
const tableSort = useAttributeTableSort()
const attributeStorage = useAttributeStorage()

watch([attributeStorage.entities.value, tableSort.state.value], () => {
    tableSort.state.value.isActive && attributeStorage.entities.value.sort(tableSort.compareFunc)
}, { deep: true })
</script>
