<template>
  <div class="card">
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" />
    <router-link :to="{ path: `/receipeByMeal/${meal.idMeal}` }">Voir la recette</router-link>
  </div>
</template>

<script>
export default {
  name: "MealCard",
  props: ["meal"],
};
</script>

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

h1 {
  font-size: 18px;
}

.card img {
  width: 150px;
  
}


/* * {
  border: solid;
  border-color: red;
} */



</style>