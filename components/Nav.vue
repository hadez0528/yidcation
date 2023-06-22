<template>
    <nav class="flex px-8 py-4 bg-white items-center w-full">
        <img src="logo.svg" alt="logo" />
        <div class="flex flex-row ml-8 mr-auto">
            <Field name="search" type="search" placeholder="Wyszukaj coś.." class="rounded-e-none w-96" />
            <Field is="select" name="search-range" class="rounded-s-none border-l border-l-gray-100">
                <option>Wszystko</option>
                <option>Produkty</option>
                <option>Kategorie</option>
            </Field>
        </div>
        <Field is="select" name="currency">
            <option>PLN</option>
            <option>EUR</option>
        </Field>
    </nav>
</template>