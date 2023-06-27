<template>
    <Table>
        <template v-slot:header>
            <ProductTableHeaderRow />
        </template>
        <template v-slot:body>
            <TableBodyRow v-for="product in productSource"
                @edit="modal.show({ productId: product.id, initialValues: { ...product } })"
                @delete="productStorage.deleteEntity(product.id)">
                <TableCell v-if="columnVisibility.isVisible('id')">{{ product.id }}</TableCell>
                <TableCell v-if="columnVisibility.isVisible('name')">{{ product.name }}</TableCell>
                <TableCell v-if="columnVisibility.isVisible('price')">{{ product.price }} PLN</TableCell>
                <TableCell v-if="columnVisibility.isVisible('quantity')">{{ product.quantity }} szt.</TableCell>
                <template v-for="[attributeId, attributeValue] of Object.entries(product.attributes)">
                    <TableCell v-if="columnVisibility.isVisible(productAttributeStorage.getEntity(attributeId).name)">{{
                        attributeValue
                    }}</TableCell>
                </template>
            </TableBodyRow>
        </template>
    </Table>
</template>

<script setup lang="ts">
const columnVisibility = useProductTableColumnVisibility()
const modal = useProductModalEdit()
const productStorage = useProductStorage()
const productAttributeStorage = useAttributeStorage()
const filter = useFilter()
const tableSort = useProductTableSort()

const productSource = ref([...productStorage.entities.value])

watch([productStorage.entities.value, filter.state.value, tableSort.state.value], () => {
    productSource.value = filter.state.value.isActive ? productStorage.getFilteredProducts() : productStorage.entities.value
    tableSort.state.value.isActive && productSource.value.sort(tableSort.compareFunc)
}, { deep: true })
</script>
