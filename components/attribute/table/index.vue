<template>
  <Table>
    <template #header>
      <AttributeTableHeaderRow />
    </template>
    <template #body>
      <AttributeTableBodyRow
        v-for="attribute in data"
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
const sort = useAttributeSort();
const attributeStorage = useAttributeStorage();

const { data } = useDataHandler<ProductAttribute>(
  attributeStorage.entities,
  search.attributeResults,
  null,
  null,
  sort.state,
  sort.compareFunc,
  sort.compareDateStringFunc
);
</script>
