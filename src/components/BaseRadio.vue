<script>
export default {
    props:{
        label:{
            type:String,
            default:''
        },
        modelValue:{
            type:[String, Number],
            default:''
        },
        value:{
            type:[String, Number],
            required:true
        }
    }
}
</script>

<template>
    <div>
        <input type="radio" 
        :checked="modelValue=== value"
        :value="value"
        @change="$emit('update:modelValue', value)"
        v-bind="$attrs"
        >
        <label for="" v-if="label">{{label}}</label>
    </div>
</template>