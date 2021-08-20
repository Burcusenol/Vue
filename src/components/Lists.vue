<template>
  <div id="app">
    <p v-if="show">Görünür</p>
    <p v-else>Görünmez</p>
    <button @click="show = !show">Göster/Gizle</button>

    <p v-if="sayi < 10">Sayı 10'dan küçüktür</p>
    <p v-else-if="sayi > 10">Sayı 10'dan büyüktür</p>
    <p v-else>Sayı 10'a eşittir</p>

    <button @click="showParagh = !showParagh">Göster/Gizle</button>
    <p v-show="showParagh">Lorem ipsum dolor sit, amet consectetu</p>

    <ul>
      <li v-for="(product, index) in products" :key="product">
        {{ product }} - {{ index }}
      </li>
    </ul>
  <button @click="products.push('Hoparlör')">Ekle</button>

    <div v-for="(product, index) in products" :key="product.id">
      <h3>{{ product }}</h3>
      <p>{{ index }}</p>
    </div>

    <template :v-for="(product, index) in products">
      <h3>{{ product }}</h3>
      <p>{{ index }}</p>
    </template>

    <ul>
      <li v-for="item in items" :key="item.id">{{item.name}}---{{item.message}}</li>
    </ul>

    <span :v-for="number in 5">{{ number }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      show: true,
      sayi: 15,
      showParagh: false,
      items: [{ message: "Foo" ,name:"Burcu"}, { message: "Bar",name:"Ay"}],
      products: ["Monitör", "Klavye", "Askı", "Masa", "Kapı"],
    };
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
