<template>
    <div class="card" >
        <ProductDetailsTemplate v-if="!isEditable"  :oneProductProps="this.oneProduct" @is-editable-change-event="isEditableChange"/>
        <EditableProductTemplate v-if="isEditable" :oneProductProps="this.oneProduct" @change-product-data-event="changeProduct"/>
    </div>

   
  
</template>

<script>
import EditableProductTemplate from '../components/EditableProductTemplate.vue';
import ProductDetailsTemplate from "../components/ProductDetailsTemplate.vue"

export default {
    name: "ProductDetails",
    components: {
        ProductDetailsTemplate,
        EditableProductTemplate
    },
    methods: {
        getData: async function() {
        const response = await fetch(`https://fakestoreapi.com/products/${this.$route.params.totoId}`)
        const data = await response.json();
        this.oneProduct = data
        console.log(data)
        },
        isEditableChange: function() {
            this.isEditable = true
        },
        changeProduct: function(newProduct) {
            console.log("product", newProduct)
            this.oneProduct = newProduct
            this.isEditable = false
            console.log(this.oneProduct)
            this.updateData(this.oneProduct);

        },
        updateData: async function(product) {
            console.log(product)
            const response = await fetch(`https://fakestoreapi.com/products/${this.$route.params.totoId}`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
              },
              body: JSON.stringify(product),
            });
            const data = await response.json
            console.log(data)
            console.log(response)
        }
    }, 
    created: function() {
        this.getData()
    },
    data: function() {
        return {
            oneProduct: {},
            isEditable: false
        }
    }


}
</script>

<style scoped>

.card {
    display:flex;
    justify-content: center;
}

</style>