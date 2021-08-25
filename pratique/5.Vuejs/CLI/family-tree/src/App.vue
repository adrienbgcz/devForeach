<template>
  <div id="app">
    <div>
      <GrandParent :gpFullname="grandParentFullname" 
        :pFullname="parentFullname" 
        :cFullname="childFullname" 
        :gcFullname="grandChildFullname"
        @change-gpFirstnameEvent="changeGpFirstname" 
        @change-PFirstnameEvent2="changePFirstname2"
        @change-CFirstnameEvent3="changeCFirstname3"
        @change-GcFirstnameEvent4="changeGcFirstname4"
        />
        
    </div>
  </div>
</template>

<script>
import GrandParent from "../src/components/GrandParent.vue"


  export default {
    name: "App",
    components: {
      GrandParent,
    },
    computed : {
      grandParentFullname: function() {
        return `${this.grandParent.firstname} ${this.grandParent.lastname}`  
      },
      parentFullname: function() {
        return `${this.grandParent.child.firstname} ${this.grandParent.child.lastname}`
      },
      childFullname: function() {
        return `${this.grandParent.child.child.firstname} ${this.grandParent.child.child.lastname}`
      },
      grandChildFullname: function() {
        return `${this.grandParent.child.child.child.firstname} ${this.grandParent.child.child.child.lastname}`
      }
    },
    methods: {
      changeGpFirstname : function(inputValue) {
        this.grandParent.firstname = inputValue;
      },
      changePFirstname2: function(inputValue) {
        this.grandParent.child.firstname = inputValue;
      },
      changeCFirstname3: function(inputValue){
        this.grandParent.child.child.firstname = inputValue;
      },
      changeGcFirstname4: function(inputValue) {
        this.grandParent.child.child.child.firstname = inputValue;
      }

    },
    data() {
      return {
        grandParent: {
          firstname: "Edmond",
          lastname: "Dupont",
          child: {
            firstname: "Jeanne",
            lastname: "Dupont",
            child: {
              firstname: "Jacques",
              lastname: "Dupont",
              child: {
                firstname: "Sacha",
                lastname: "Dupont",
              },
            },
          },
        },
      };
    },
    
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
