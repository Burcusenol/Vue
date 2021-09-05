<template>
  <div>
    <input type="text" v-model="searchText" />
    <ul>
      <li v-for="product in filtered" :key="product">{{ product }}</li>
    </ul>
  </div>
</template>

<script>
import {productMixin} from './productMixin'
export default {
 mixins:[productMixin],
 created(){
     console.log("filter created")
 }
};
</script>

<style></style>
