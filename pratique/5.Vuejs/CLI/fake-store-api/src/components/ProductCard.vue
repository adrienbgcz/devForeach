<template>
    <div class="card">
        <h1>{{productProps.title}}</h1>
        <img :src="productProps.image"/>
        <p>{{productProps.description}}</p>
        <span>Prix : {{productProps.price}} € TTC</span>
        <router-link :to="{path:`/productDetails/${productProps.id}`}"><button>Voir plus</button></router-link>

    </div>
  
</template>

<script>
export default {
    name: "ProductCard",
    props: ["productProps"]
}
</script>

<style scoped>

.card {
  width: 300px;
  height: 400px;
  border: solid;
  border-color: black;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 13px 3px rgba(0,0,0,0.31);
}

h1 {
  font-size: 20px;
}

.card img {
  width: 100px;
  
}

p {
  font-size: 12px;
  height: 110px;
  overflow: hidden;
}

button {
    margin-top: 10px;
}

</style>