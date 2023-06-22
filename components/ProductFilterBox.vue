<template>
    <Box class="w-96" v-bind="$attrs">
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
            <PrimaryButton>Zastouj</PrimaryButton>
            <SecondaryButton>Zresetuj</SecondaryButton>
        </div>
    </Box>
</template>