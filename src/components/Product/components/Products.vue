<template>
  <div v-if="productList.length>0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    <div class="row product-container">
      <app-product v-for="product in productList" :key="product">
        <img
          class="card-img-top"
          :src="product.selectedImage"
          :alt="product.title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <small> <strong>Adet : </strong> {{ product.count }} </small>
          <br />
          <small> <strong>Fiyat : </strong> {{ product.price }} </small>
          <br />
          <small> <strong>Tutar : </strong> {{ product.totalPrice }} </small>
        </div>
      </app-product>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import { eventBus } from "../../../main";
export default {
  components: {
    appProduct: Product,
  },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    eventBus.$on("productAdded", (product) => {
      if (this.productList.length < 2) {
        this.productList.push(product);
        eventBus.$emit("progressBarUpdated", this.productList.length);
      }
      alert("Daha fazla ürün ekleyemezsiniz!");
    });
  },
};
</script>
