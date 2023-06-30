<template>
  <Box class="w-full">
    <div class="flex flex-row justify-between items-start">
      <BoxTitle>produkty</BoxTitle>
      <ButtonPrimary icon-src="/plus-box.svg" @click="modal.show()"
        >Dodaj produkt</ButtonPrimary
      >
    </div>
    <ProductTable class="mt-2" />
  </Box>
</template>

<script setup lang="ts">
const modal = useProductModalAdd();
</script>
