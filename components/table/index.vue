<template>
    <div class="table w-full normal-case border-separate border-spacing-y-4" v-bind="$attrs">
        <div class="table-header-group">
            <slot name="header"></slot>
        </div>
        <div class="table-row-group">
            <slot name="body"></slot>
        </div>
    </div>
</template>
