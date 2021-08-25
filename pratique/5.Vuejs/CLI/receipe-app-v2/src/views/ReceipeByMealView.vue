<template>
  <div>
    <ReceipeCard v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>

<script>
import ReceipeCard from "../components/ReceipeCard.vue";

export default {
  name: "ReceipeByMealView",
  components: {
    ReceipeCard,
  },
  data: function () {
    return {
      meals : []
    };
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: async function () {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.idMeal}`
        );
        const data = await response.json();
        this.meals = data.meals
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>