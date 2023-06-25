<template>
    <Button v-bind="$attrs"
        class="text-orange-500 border border-solid border-orange-500 hover:bg-orange-500 hover:text-white">
        <slot></slot>
    </Button>
</template>