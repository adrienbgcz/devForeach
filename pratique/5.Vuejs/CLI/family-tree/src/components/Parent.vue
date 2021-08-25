<template>
  <section class="parent">
    <span>{{pFullname}}</span>
    <input type="text" v-model="inputParentValue"/>
    <button @click="changePFirstnameEvent">Change</button>

    <Child :cFullname="this.cFullname" 
    :gcFullname="this.gcFullname"
    @change-CFirstnameEvent="changeCFirstname"
    @change-GcFirstnameEvent2="changeGcFirstname2"
    />
  </section>
</template>

<script>
import Child from "../components/Child.vue"

  export default {
    components: {
      Child
    },
    props: ["pFullname", "cFullname", "gcFullname"],
    data() {
      return {
        inputParentValue: ''
      };
    },
    computed: {},
    methods: {
      changePFirstnameEvent : function() {
        this.$emit("change-PFirstnameEvent", this.inputParentValue)
      },
      changeCFirstname: function(inputChildValue) {
        this.$emit("change-CFirstnameEvent2", inputChildValue)
      },
      changeGcFirstname2: function(inputGrandChildValue) {
        this.$emit("change-GcFirstnameEvent3", inputGrandChildValue)
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .parent {
    padding: 33px;
    border: 3px solid green;
    padding-left: 33px;
  }
  div {
    color: green;
    margin-bottom: 22px;
  }
  input {
    margin-right: 22px;
  }
</style>
