<template>
    <Table>
        <template v-slot:header>
            <AttributeTableHeaderRow />
        </template>
        <template v-slot:body>
            <AttributeTableBodyRow v-for="attribute in attributeSource" :key="attribute.id" :id="attribute.id"
                :values="attribute.values" :name="attribute.name" :type="attribute.type" :createdAt="attribute.createdAt" />
        </template>
    </Table>
</template>

<script setup lang="ts">
const search = useSearch()
const tableSort = useAttributeTableSort()
const attributeStorage = useAttributeStorage()

const attributeSource = ref([...attributeStorage.entities.value])

watch(tableSort.state, () => {
    attributeSource.value.sort(tableSort.compareFunc)
}, { deep: true })

watch([attributeStorage.entities, search.attributeResults], () => {
    if (search.state.value.isActive) {
        attributeSource.value = [...search.attributeResults.value]
    } else {
        attributeSource.value = [...attributeStorage.entities.value]
    }
}, { deep: true })
</script>
