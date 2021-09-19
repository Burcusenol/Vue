<template>
  <div class="container">
    <div class="row">
      <h3>Vue-Router</h3>
      <div class="col md 12">
        <app-header></app-header>
        <br>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Vue-Router/Header.vue";

export default{
 components:{
   appHeader:Header,
 },
  data() {
    return {

    };
  },
  methods: {}
}
</script>

<style></style>
