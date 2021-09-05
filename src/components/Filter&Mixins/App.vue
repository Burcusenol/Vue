<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{ message | toUpperCase | toLowerCase }}</p>

        <button class="btn btn-primary" @click="products.push('Kamyon')">Ürün Ekle</button>
        <input type="text" v-model="searchText" />
        <ul>
          <li v-for="product in filtered" :key="product">{{ product }}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from './components/Filter&Mixins/FilterList.vue'

export default {

  components:{
    appList:FilterList
  },
  data() {
    return {
      message: "Selamlar kablosuzkedi ||",
      searchText: ''
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
  created(){
    console.log("app vue created")
  }
  
};
</script>

<style></style>
