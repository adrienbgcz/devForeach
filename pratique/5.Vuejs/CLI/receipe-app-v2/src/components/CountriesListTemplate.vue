<template>
    
    <div>
        <h1>Plats par pays</h1>
        <ul>
            <router-link class="links" v-for="country in countriesList" :key="country.strArea" :to="{path:`/displayMeals?countryName=${country.strArea}`}"><li>{{country.strArea}}</li></router-link>
        </ul>
    </div>
    

</template>

<script>
export default {
    name: "ContriesListTemplate",
    // props: ["country"],
    data: function () {
        return {
            countriesList: []
        }
    },
    created : function() {
        this.getData()
    },
    methods : {
        getData: async function() {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            const data = await response.json()
            this.countriesList = data.meals
            console.log(data)
        }
    }

}
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
    
}

h1 {
    font-size: 16px;
    width: 120px
}
</style>