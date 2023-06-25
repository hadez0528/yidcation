<template>
    <TableBodyRow @edit="modal.show({ categoryId: id, initialValues })">
        <TableCell v-if="columnVisibility.isVisible('id')">{{ id }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('name')">{{ name }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('type')">{{ type }}</TableCell>
        <TableCell v-if="columnVisibility.isVisible('createdAt')">{{ createdAt }}</TableCell>
    </TableBodyRow>
</template>

<script setup lang="ts">
const columnVisibility = useAttributeTableColumnVisibility()
const modal = useAttributeModalEdit()

export interface Props {
    id: string
    name: string
    type: ProductAttributeType
    createdAt: string
}

const props = defineProps<Props>()

const initialValues = ref({ name: props.name })
</script>