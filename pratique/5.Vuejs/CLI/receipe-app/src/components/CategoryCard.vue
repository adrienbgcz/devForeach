<template>
  <div>
    <h1>{{category.strCategory}}</h1>
    <!-- <img :src="category.strCategoryThumb" /> -->
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["category"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
