<template>
  
  <main>
    <h1>Catégories de plats</h1>
      
    
      <div class="allCards">  
        <CategoryCard
          v-for="category in allMealsCategories"
          :key="category.idCategory"
          :toto="category"
        />
      </div>
  
  </main>
</template>

<script>
import CountriesListTemplate from "../components/CountriesListTemplate.vue"
import CategoryCard from "../components/CategoryCard.vue";

export default {
  name: "AllCategoriesView",
  components: {
    CategoryCard,
    CountriesListTemplate
  },
  data: function () {
    return {
      allMealsCategories: [],
    };
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: async function () {
      try {
        const response = await fetch(
          "https://themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        this.allMealsCategories = data.categories;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.allCards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}



h1 {
  display:flex;
  justify-content: center;
}


</style>