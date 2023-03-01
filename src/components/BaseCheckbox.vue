<script>
export default {
    props:{
        label:{
            type:String,
            default:''
        },
        modelValue:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<template>
    <div>
        <input type="checkbox"  class="field" :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        >
        <label for="" v-if="label">{{ label }}</label>
    </div>
</template>
