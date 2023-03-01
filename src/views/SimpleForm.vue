<script>
import BaseInputVue from "../components/BaseInput.vue";
import BaseSelectVue from "../components/BaseSelect.vue";
import BaseCheckboxVue from "../components/BaseCheckbox.vue";
import BaseRadioGroupVue from "../components/BaseRadioGroup.vue";
export default {
  components: {
    BaseInputVue,
    BaseSelectVue,
    BaseCheckboxVue,
    BaseRadioGroupVue,
  },
  data() {
    return {
      pets: "",
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
        categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      petOptions:[
        {label:'Yes',value:1},
        {label:'No',value:0},

      ]
    };
  },
};
</script>

<template>
  <div>
    <BaseInputVue type="text" v-model="event.title" label="Title" />

    <BaseInputVue type="text" v-model="event.description" label="Description" />
    <h3>Where your event?</h3>
    <BaseInputVue type="text" v-model="event.location" label="Location" />
   
   <BaseSelectVue 
   v-model="event.category"
   label="Select a Category"
   :options="categories"
   />

    <div><BaseCheckboxVue v-model="event.extras.catering" label="Catering"/></div>
    <div><BaseCheckboxVue v-model="event.extras.music" label="Live music"/></div>

    <h3>Are Pets Allowed?</h3>
    <div><BaseRadioGroupVue v-model="event.pets" name="pets" :options="petOptions"/></div>
  </div>
  <div>{{event.pets}}</div>
</template>
