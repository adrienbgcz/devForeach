<template>
  <section class="child">
    <span>{{cFullname}}</span>
    <input type="text" v-model="inputChildValue"/>
    <button @click="changeCFirstnameEvent">Change</button>
    <GrandChild :gcFullname="this.gcFullname"
    @change-GcFirstnameEvent="changeGcFirstname"
    />
  </section>
  
</template>

<script>
import GrandChild from "../components/GrandChild.vue"

  export default {
    components: {
      GrandChild
    },
    props: ["cFullname", "gcFullname"],
    data() {
      return {
        inputChildValue: ''
      };
    },
    computed: {},
    methods: {
      changeCFirstnameEvent: function () {
        this.$emit("change-CFirstnameEvent", this.inputChildValue)
      }, 
      changeGcFirstname: function(inputGrandChildValue) {
        this.$emit("change-GcFirstnameEvent2", inputGrandChildValue)
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .child {
    padding: 33px;
    border: 3px solid black;
    margin-left: 33px;
  }
  div {
    color: black;
    margin-bottom: 22px;
  }
  input {
    margin-right: 22px;
  }
</style>
