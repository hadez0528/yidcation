<template>
    <CategoryForm @submit="onSubmit" submit-button-label="Dodaj" />
</template>

<script setup lang="ts">
const onSubmit = (values) => console.log(values)
</script>