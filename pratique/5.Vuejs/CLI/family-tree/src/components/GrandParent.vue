<template>
  <section class="grand-parent">
    <span>{{gpFullname}}</span>
    <input type="text" v-model="inputGrandParentValue"/>
    <button @click="changeGpFirstNameEvent">Change</button>

    <Parent
      :pFullname="this.pFullname" 
      :cFullname="this.cFullname" 
      :gcFullname="this.gcFullname"
      @change-PFirstnameEvent="changePFirstname"
      @change-CFirstnameEvent2="changeCFirstname2"
      @change-GcFirstnameEvent3="changeGcFirstname3"
    />
    
  </section>
</template>

<script>
import Parent from "./Parent.vue"

  export default {
    components: {
      Parent
    },
    props: ["gpFullname", "pFullname", "cFullname", "gcFullname"],
    data() {
      return {
        inputGrandParentValue : '',
      };
    },
    computed: {},
    methods: {
      changeGpFirstNameEvent: function() {  
      this.$emit("change-gpFirstnameEvent", this.inputGrandParentValue)
      this.inputGrandParentValue = ''
      },
      changePFirstname: function(inputParentValue) {
      this.$emit("change-PFirstnameEvent2", inputParentValue)
      },
      changeCFirstname2: function(inputChildValue) {
      this.$emit("change-CFirstnameEvent3", inputChildValue)
      },
      changeGcFirstname3: function(inputGrandChildValue) {
      this.$emit("change-GcFirstnameEvent4", inputGrandChildValue)
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grand-parent {
    padding: 33px;
    border: 3px solid violet;
    padding-left: 33px;
    text-align: left;
  }

  div {
    color: violet;
    margin-bottom: 22px;
  }
  input {
    margin-right: 22px;
  }
</style>
