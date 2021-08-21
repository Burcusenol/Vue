<template>
  <div id="app">
    <!-- 1) Butona tıklayarak <p> elementleri arasında bir Toggle İşlevi yapın. Hem v-if hem de v-show syntax'larını kullanarak bu işlemi gerçekleştiriniz. Aralarındaki farkı Öğeyi İncele diyerek bu iki syntax farkını gözlemleyiniz -->
  <div>
    <button @click="show=!show ">Toggle</button>
    <p v-if="show">Beni Görebiliyor musun?</p>
    <p v-else>Ya da beni görebiliyor musun?</p>
    <p v-show="show">Beni Görebiliyor musun?</p>
    <p v-show="!show">Ya da beni görebiliyor musun?</p>
  </div>
  <!-- 2) Array kullanarak bir <ul> listesi oluşturunuz. Liste içerisinde hem Array'deki verinin değerini hem de index numarasını her bir elementin içerisine yazdırınız  -->
  <ul>
    <li v-for="(person,index) in persons" :key="person">{{person}} -- {{index}}</li>
  </ul>
  <!-- 3) Yan taraftaki objenin tüm key ve value verilerini yazdırınız: customObject: {title: 'Game of Thrones',author: 'George R.R',books: '7'}. Ayrıca tüm elementlerin index numarasını da yazdırınız. -->
  <ul>
    <li v-for="(value,key,index) in customObject" :key="value">{{key}}:{{value}}--{{index}}</li>
  </ul>
  <!-- 4) Yan taraftaki objenin tüm value değerlerini yazdırınız. Ayrıca iç içe bir loop daha kurarak Array içerisindeki verileri de yazdırınız : { name: 'NesnedLoop', id: 19,data: [4.3, 2.67, 10.42, 1402] } (ipucu: v-for ve v-if Directive'lerinin beraber kullanımı bunu başarmanızı sağlayacaktır.) -->
  <ul>
    <li v-for="value in object" :key="value">
    <template v-if="Array.isArray(value)">
        <div v-for="item in value" :key="item">{{item}}</div>
    </template>
    <template v-else>
        {{value}}
    </template>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      show: false,
      hide:true,
      sayi: 15,
      customObject: {title: 'Game of Thrones',author: 'George R.R',books: '7'},
      products: ["Monitör", "Klavye", "Askı", "Masa", "Kapı"],
      persons: ["Ali", "Ayşe", "Fatma", "Mert", "Kaan"],
      object:{ name: 'NesnedLoop', id: 19,data: [4.3, 2.67, 10.42, 1402] }
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
