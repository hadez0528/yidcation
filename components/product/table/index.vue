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
                <TableCell v-if="columnVisibility.isVisible('price')">{{ currency.convertPrice(product.price) }} {{
                    currency.state.value.code }}</TableCell>
                <TableCell v-if="columnVisibility.isVisible('quantity')">{{ product.quantity }} szt.</TableCell>
                <TableCell v-if="columnVisibility.isVisible('createdAt')">{{ product.createdAt }}</TableCell>
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
const search = useSearch()
const currency = useCurrency()

const productSource = ref([...productStorage.entities.value])

watch(tableSort.state, () => {
    productSource.value.sort(tableSort.state.value.attributeKey === 'createdAt' ? tableSort.compareDateStringFunc : tableSort.compareFunc)
}, { deep: true })

watch([productStorage.entities, search.productResults, filter.state], () => {
    if (search.state.value.isActive) {
        productSource.value = [...search.productResults.value]
    } else {
        productSource.value = [...productStorage.entities.value]
    }

    if (filter.state.value.isActive) {
        productSource.value = productSource.value.filter(filter.filterFunc)
    }
}, { deep: true })
</script>
