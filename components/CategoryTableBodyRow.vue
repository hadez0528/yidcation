<template>
    <TableBodyRow @edit="modal.show({ categoryId: id, initialValues })">
        <TableCell v-if="columnVisibility.isVisible('id')">{{ id }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('name')">{{ name }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('productCount')">{{ productCount }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('createdAt')">{{ createdAt }}</TableCell>
    </TableBodyRow>
</template>

<script setup lang="ts">
const columnVisibility = useCategoriesColumnVisibility()
const modal = useEditCategoryModal()

export interface Props {
    id: number
    name: string
    productCount: number
    createdAt: string
}

const props = defineProps<Props>()

const initialValues = ref({ name: props.name })
</script>