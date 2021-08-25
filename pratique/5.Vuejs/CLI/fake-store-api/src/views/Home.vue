<template>
    <div class="allCards">
        <ProductCard v-for="product in allProducts" :key="product.id" :productProps="product"/>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"

export default {

    name : "Home",
    components : {
        ProductCard
    },
    methods : {
        getData: async function() {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            this.allProducts = data
            console.log(data)
        }
    },
    created : function() {
        this.getData()
    },
    data: function() {
        return {
            allProducts: []
        }
    }

}
</script>

<style scoped >
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