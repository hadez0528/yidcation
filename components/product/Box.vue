<template>
  <Box class="w-full !px-4 !pt-4 pb-0 h-min">
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
