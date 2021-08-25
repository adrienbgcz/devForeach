<template>
  <main id="app">
    <CategoryCard v-for="category in allMealsCategories" :key="category.idCategory" :category="category"/>
  </main>
</template>

<script>
import CategoryCard from './components/CategoryCard.vue'

export default {
  name: 'App',
  components: {
    CategoryCard
  },
  data: function() {
    return {
      allMealsCategories: []

    }
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: async function () {
      const response = await fetch("https://themealdb.com/api/json/v1/1/categories.php")
      this.allMealsCategories = await response.json();
      console.log(this.allMealsCategories)
    }
  }

}
</script>

<style>

</style>
