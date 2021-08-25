<template>
 
    <div class="card">
        <h1>{{oneProductProps.title}}</h1>
        <img :src="oneProductProps.image"/>
        <p>{{oneProductProps.description}}</p>
        <span>Prix : {{oneProductProps.price}} € TTC</span>
        <button @click="isEditableChange">Editer</button>
    </div>

</template>

<script>
export default {
    name: "ProductDetailsTemplate",
    props: ["oneProductProps"],
    components : {
        
    },
    methods: {
        isEditableChange: function() {
            this.$emit("is-editable-change-event")
        }
    },
    data: function() {
        return {
            
        }
    }

}
</script>

<style scoped>
.card {
  width: 400px;
  height: 100%;
  border: solid;
  border-color: black;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 13px 3px rgba(0,0,0,0.31);
}

h1 {
  font-size: 30px;
}

.card img {
  width: 150px;
  
}

span {
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px
}

button {
    margin: 20px
}
</style>