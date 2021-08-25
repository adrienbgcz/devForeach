<template>
  <div>
     <div id="app">
        <div id="nav">
          <router-link to="/">Accueil</router-link>
            <div class="body">
              <CountriesListTemplate />
              <router-view></router-view>
            </div>
            <IngredientsListTemplate />
      </div>
    </div>
  </div>
  
</template>

<script>
import CountriesListTemplate from "./components/CountriesListTemplate.vue"
import IngredientsListTemplate from './components/IngredientsListTemplate.vue'

export default {
  name: "App",
  components: {
    CountriesListTemplate,
    IngredientsListTemplate
  }
}
</script>



<style scoped>

.body {
  display: flex;
}

* {
  color: #272727;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
</style>



