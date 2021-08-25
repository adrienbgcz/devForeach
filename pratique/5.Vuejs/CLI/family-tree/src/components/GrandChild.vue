<template>
  <section class="grand-child">
    <span>{{gcFullname}}</span>
    <input type="text" v-model="inputGrandChildValue"/>
    <button @click="changeGcFirstnameEvent">Change</button>
  </section>
</template>

<script>
  export default {
    props: ["gcFullname"],
    data() {
      return {
        inputGrandChildValue:''
      };
    },
    computed: {},
    methods: {
      changeGcFirstnameEvent: function() {
        this.$emit("change-GcFirstnameEvent", this.inputGrandChildValue)
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grand-child {
    padding: 33px;
    border: 3px solid red;
    padding-left: 33px;
  }
  div {
    color: red;
    margin-bottom: 22px;
  }
  input {
    margin-right: 22px;
  }
</style>
