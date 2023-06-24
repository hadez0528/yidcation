<template>
    <div class="flex flex-col" :class="{ 'gap-y-1': label || errorMessage }">
        <div class="flex flex-col">
            <label :for="`${name}-input`" v-if="label" :class="{ 'text-red-500': errorMessage }"
                class="font-semibold text-sm text-secondary">{{ label
                }}</label>
            <p class="text-red-500 text-sm" v-if="errorMessage">{{ errorMessage }}</p>
        </div>
        <component v-if="is !== 'select'" :is="is" :id="id" :value="value" @input="handleChange" @blur="handleBlur"
            :class="{ '!border': errorMessage, '!border-red-500': errorMessage, '!border-solid': errorMessage, '!focus:border-red-500': errorMessage }"
            class="focus:border focus:border-secondary focus:border-solid rounded bg-gray-50 p-2 text-tertiary text-sm outline-none text-color-slate-700 border border-transparent"
            v-bind="$attrs" />
        <component v-else :is="is" :id="id" :value="value" @input="handleChange" @blur="handleBlur"
            :class="{ '!border': errorMessage, '!border-red-500': errorMessage, '!border-solid': errorMessage, '!focus:border-red-500': errorMessage }"
            class="focus:border focus:border-secondary focus:border-solid rounded text-tertiary bg-gray-50 p-2 text-sm outline-none text-color-slate-700 border border-transparent"
            v-bind="$attrs">
            <slot></slot>
        </component>
    </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

export interface Props {
    name: string
    label?: string
    error?: string
    is?: "input" | "select" | "textarea",
    defaultValue?: string
}

const props = withDefaults(defineProps<Props>(), {
    is: "input"
})

const name = toRef(props, 'name')

const id = computed(() => `${props.name}-${props.is}`)

const {
    value,
    errorMessage,
    handleBlur,
    handleChange,
} = useField(name, undefined, {
    initialValue: props.defaultValue,
});
</script>