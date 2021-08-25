<template>

    
    <div class="card">
      <h2>{{ toto.strCategory }}</h2>
      <img :src="toto.strCategoryThumb" />
      <p>{{ toto.strCategoryDescription }}</p>
      <router-link :to="{path : `/displayMeals?categoryName=${toto.strCategory}`}">Voir plus</router-link>
    </div>

</template>

<script>
export default {
  name: "CategoryCard",
  props: ["toto"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 200px;
  height: 300px;
  border: solid;
  border-color: black;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 13px 3px rgba(0,0,0,0.31);
  

  
}

h2 {
  font-size: 20px;
}

.card img {
  width: 150px;
  
}

p {
  font-size: 12px;
  height: 110px;
  overflow: hidden;
}



/* * {
  border: solid;
  border-color: red;
} */

</style>

