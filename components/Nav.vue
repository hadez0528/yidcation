<template>
    <nav class="flex px-8 py-4 bg-white items-center w-full">
        <img src="logo.svg" alt="logo" />
        <SearchForm />
        <Field is="select" name="currency">
            <option>PLN</option>
            <option>EUR</option>
        </Field>
    </nav>
</template>