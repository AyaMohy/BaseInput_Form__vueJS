<script >
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div>
        <label for="">{{ label }}</label>
        <input v-bind="$attrs" :placeholder="label" class="field" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">


    </div>

</template>
<style scoped>

</style>
