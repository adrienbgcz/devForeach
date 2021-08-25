<template>
<div class="receipe">
    <h1>{{meal.strMeal}}</h1>
    <h2><router-link :to="{path : `/displayMeals?countryName=${meal.strArea}`}">{{meal.strArea}} meal</router-link></h2>
    <h3><router-link :to="{path : `/displayMeals?mainIngredient=${meal.strIngredient1}`}">Main Ingredient : {{meal.strIngredient1}}</router-link></h3>
    <img :src="meal.strMealThumb" />
    <p>{{meal.strInstructions}}</p>
    
</div>
  
</template>

<script>
export default {
name : "ReceipeCard",
props : [ "meal" ]
}
</script>

<style scoped>

.receipe {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.receipe img {
    width: 300px;
}

p {
    width: 75%;
}

</style>