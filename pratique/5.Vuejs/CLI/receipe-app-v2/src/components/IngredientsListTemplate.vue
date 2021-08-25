<template>
    <div>
        <h1>Plats par ingredient</h1>
        <ul>
            <router-link class="links" v-for="ingredient in ingredientsList" :key="ingredient.idIngredient" :to="{path:`/displayMeals?mainIngredient=${ingredient.strIngredient}`}"><li>{{ingredient.strIngredient}}</li></router-link>
        </ul>
    </div>

</template>

<script>
export default {
  name: "IngredientsListTemplate",
  
  data: function () {
    return {
      ingredientsList: [],
    };
  },
  created: function () {
    this.getData();
  },
  methods : {
      getData: async function() {
          const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
          const data = await response.json()
          console.log(data)
          this.ingredientsList = data.meals
      }
  }
};
</script>

<style scoped>
div {
    padding: 20px
}

.links {
    text-decoration: none;
    color: #000000;
    
}

.links:hover {
    text-decoration: underline;
    background-color: #A2E9FF;
}

ul {
    list-style: none;
    padding: 0;
    display: flex; 
    flex-wrap: wrap;
}

li {
    padding: 10px
}

h1 {
    font-size: 16px;
    width: 200px;
    display: flex;
    justify-content: left;
    


}
</style>