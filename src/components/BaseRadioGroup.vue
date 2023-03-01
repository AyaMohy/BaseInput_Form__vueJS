<script>
import BaseRadioVue from './BaseRadio.vue'
export default {
    props:{
        options:{
            type:Array,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        modelValue:{
            type:[String, Number]
        }
    },
    components:{
        BaseRadioVue
    }
}
</script>

<template>
    <div>
        <BaseRadioVue v-for="option in options" :key="option.value" :label="option.label" 
        :value="option.value" :name="name"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue',$event)"
        />
    </div>
</template>