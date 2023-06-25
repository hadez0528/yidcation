<template>
    <Box class="w-full">
        <div class="flex flex-row justify-between items-start">
            <BoxTitle>produkty</BoxTitle>
            <ButtonPrimary @click="modal.show()" iconSrc="plus-box.svg">Dodaj produkt</ButtonPrimary>
        </div>
        <ProductTable class="mt-2" />
    </Box>
</template>

<script setup lang="ts">
const modal = useAddProductModal()
</script>