<template>
  <div>
      <form @submit.prevent="displayChangedProduct">
        <p>Title</p>
        <input type="text" v-model="productTitle">
        <p>Image</p>
        <input type="text" v-model="productImage"/>
        <p>Description</p>
        <textarea v-model="productDescription" />
        <p>Prix :</p>
        <input v-model="productPrice" /><br /><br />
        <input type="submit" value="Valider" />
      </form>
    
  </div>

</template>

<script>
export default {
    name : "EditableProductTemplate",
    data: function() {
        return {
            productTitle : this.oneProductProps.title,
            productImage : this.oneProductProps.image,
            productDescription : this.oneProductProps.description,
            productPrice : this.oneProductProps.price,
            productCategory: this.oneProductProps.category
  
        }
    },
    props : ["oneProductProps"],
    methods : {
        displayChangedProduct: function() {
            const newProduct = {
                // id : this.oneProductProps.id,
                // category : this.oneProductProps.category,
                title : this.productTitle, 
                image : this.productImage,
                description : this.productDescription,
                price : this.productPrice,
                category : this.productCategory
            }
            this.$emit("change-product-data-event", newProduct)
            // console.log(newProduct)
        }
    },
}
</script>

<style>

</style>