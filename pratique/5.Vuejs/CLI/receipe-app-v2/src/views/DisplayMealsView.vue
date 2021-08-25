<template>
  <main class="allCards">
    <MealCard v-for="meal in allMealsByCategory" :key="meal.idMeal" :meal="meal" />
  </main>
</template>

<script>
import MealCard from "../components/MealCard.vue"

export default {
  name: 'DisplayMealsView',
  components: {
    MealCard
  },
  data: function() {
    return {
      allMealsByCategory: []
    }
    
  },
  created : function() {
    this.getData()
    // console.log(this.$route)
    // console.log(this.$route.query)
  },
  methods: {
    getData: async function () {
      let filter = ''
      if(this.$route.query.categoryName) {
        filter=`c=${this.$route.query.categoryName}`
      } 
      if(this.$route.query.countryName) {
        filter=`a=${this.$route.query.countryName}`
      } 
      if(this.$route.query.mainIngredient) {
        filter=`i=${this.$route.query.mainIngredient}`
      } 

      
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${filter}`)
      const data = await response.json();
      this.allMealsByCategory = data.meals
      console.log(data)
    }
  },
  watch: {
    $route : function() {
      this.getData()  
    }
  }
}
</script>
  

<style>
.allCards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>