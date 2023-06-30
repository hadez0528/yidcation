<template>
  <Table>
    <template #header>
      <AttributeTableHeaderRow />
    </template>
    <template #body>
      <AttributeTableBodyRow
        v-for="attribute in attributeSource"
        :id="attribute.id"
        :key="attribute.id"
        :values="attribute.values"
        :name="attribute.name"
        :type="attribute.type"
        :created-at="attribute.createdAt"
      />
    </template>
  </Table>
</template>

<script setup lang="ts">
const search = useSearch();
const tableSort = useAttributeTableSort();
const attributeStorage = useAttributeStorage();

const attributeSource = ref([...attributeStorage.entities.value]);

watch(
  tableSort.state,
  () => {
    attributeSource.value.sort(
      tableSort.state.value.attributeKey === "createdAt"
        ? tableSort.compareDateStringFunc
        : tableSort.compareFunc
    );
  },
  { deep: true }
);

watch(
  [attributeStorage.entities, search.attributeResults],
  () => {
    if (search.state.value.isActive) {
      attributeSource.value = [...search.attributeResults.value];
    } else {
      attributeSource.value = [...attributeStorage.entities.value];
    }
  },
  { deep: true }
);
</script>
