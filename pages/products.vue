<template>
  <NuxtLayout name="products">
    <ProductFilterBox />
    <ProductBox />
  </NuxtLayout>

  <!-- Modals -->
  <ProductModalTableColumnVisibility />
  <ProductModalEdit />
  <ProductModalAdd />
</template>

<script setup lang="ts">
useHead({
  title: "Animal-Houses - Products",
});
</script>
