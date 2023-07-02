<template>
  <Table>
    <template #header>
      <ProductTableHeaderRow />
    </template>
    <template #body>
      <TableBodyRow
        v-for="product in data"
        :key="product.id"
        @edit="
          modal.show({ productId: product.id, initialValues: { ...product } })
        "
        @delete="productStorage.deleteEntity(product.id)"
      >
        <TableCell v-if="columnVisibility.isVisible('id')">{{
          product.id
        }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('name')">{{
          product.name
        }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('price')"
          >{{ currency.convertPrice(product.price) }}
          {{ currency.state.value.code }}</TableCell
        >
        <TableCell v-if="columnVisibility.isVisible('quantity')"
          >{{ product.quantity }} szt.</TableCell
        >
        <TableCell v-if="columnVisibility.isVisible('createdAt')">{{
          product.createdAt
        }}</TableCell>
        <template
          v-for="[attributeId, attributeValue] of Object.entries(
            product.attributes
          )"
          :key="attributeId"
        >
          <TableCell
            v-if="
              columnVisibility.isVisible(
                attributeStorage.getEntity(attributeId).name
              )
            "
            >{{ attributeValue }}</TableCell
          >
        </template>
      </TableBodyRow>
    </template>
  </Table>
</template>

<script setup lang="ts">
const columnVisibility = useProductTableColumnVisibility();
const modal = useProductModalEdit();
const productStorage = useProductStorage();
const attributeStorage = useAttributeStorage();
const filter = useFilter();
const sort = useProductSort();
const search = useSearch();
const currency = useCurrency();

const { data } = useDataHandler<Product>(
  productStorage.entities,
  search.productResults,
  filter.state,
  filter.filterFunc,
  sort.state,
  sort.compareFunc,
  sort.compareDateStringFunc
);
</script>
