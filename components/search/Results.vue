<template>
    <div class="m-8 flex flex-row gap-x-8">
        <Box class="w-full">
            <BoxTitle>produkty</BoxTitle>
            <div class="mt-8 flex flex-col gap-y-4">
                <SearchResultItem :id="123" name="Fajny domek" />
                <SearchResultItem :id="321" name="Fajny domek" />
                <SearchResultItem :id="432" name="Fajny domek" />
            </div>
        </Box>
        <Box class="w-full">
            <BoxTitle>produkty</BoxTitle>
            <p class="text-l mt-8 normalcase text-gray-400">Brak wyników wyszukiwania</p>
        </Box>
    </div>
</template>