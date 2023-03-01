<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        options: {
            type: Array,
            required: true
        }
    }
}
</script>
<template>
    <div>
        <label for="" v-if="label">{{ label }}</label>
        <select class="field" :value="modelValue" v-bind="{
            ...$attrs,
            onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
        }">"
            >
            <option :value="option" v-for="option in options" :key="option">{{ option }}</option>
        </select>
        <div>{{ modelValue }}</div>
    </div>
</template>