<template>
    <Box class="lg:w-96 w-full" v-bind="$attrs">
        <BoxTitle>filtry</BoxTitle>
        <div class="mt-4 flex flex-col gap-y-4">
            <Field is="select" name="category" label="Kategoria">
                <option>Psy</option>
                <option>Koty</option>
            </Field>
            <Field is="select" name="fitter-place" label="Miejsce montażu">
                <option>Drzewo</option>
                <option>Ziemia</option>
            </Field>
            <Field is="select" name="isolation" label="Izolacja">
                <option>Wewnętrzna</option>
                <option>Zewnętrzna</option>
            </Field>
            <div class="flex flex-row gap-4 lg:flex-col">
                <PrimaryButton class="lg:w-full w-full">Zastouj</PrimaryButton>
                <SecondaryButton class="lg:w-full w-full">Zresetuj</SecondaryButton>
            </div>
        </div>
    </Box>
</template>