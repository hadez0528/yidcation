<template>
    <TableRow>
        <slot></slot>
        <TableHeadCell class="!py-2" :show-sort-button="false" justify-right>
            <IconButton icon-src="settings.svg" width="24" height="24" />
        </TableHeadCell>
    </TableRow>
</template>