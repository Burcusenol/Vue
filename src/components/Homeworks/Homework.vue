<template>
  <div id="app">
    <!-- 1) Interpolation yani {{}} Syntax'ını kullanarak <p> elementinin içeriğini Name ve Age verileriyle doldurun-->
    <p>VueJS Muazzam bir Framework - {{ name }} ({{ age }})</p>
    <!-- 2) Yaşınızı 5 ile çarpıp <p> içerisinde yazdırınız -->

    <p>{{age*5}}</p>

    <!-- 3) Fonksiyon çağırarak 0 ile 1 arasında bir sayı üretip <p> içerisinde yazdırınız (Math.random()) -->
    <p>{{random()}}</p>

    <!-- 4) Google üzerinden bulacağınız herhangi bir fotoğrafı <img> elementinde gösterme işlemini yapınızı. Bunu yaparken "src" attribute' una bind etmeyi unutmayınız -->
    <img v-bind:src="img"/>
    <!-- 5) Name değişkeninin değerinin <input /> içine yazdığınız değer ile anlık olarak değiştirilmesini sağlayınız. ("value" attribute kullanarak) -->
    <div>
      <input type="text" v-on:input="changeTitle" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      name:"Burcu",
      age:23,
      img:"https://lh3.googleusercontent.com/proxy/PhE30DX4XPv_G1Pe1g0iI2daj2_7yOkg2FbmAwnuqUa--JCy0hN76qHHyhyjxOe4-zmDcQ-dOwwlsAGEUzIbbUSWM8MyTJJoeWdho2vuMWak",
    };
  },
  methods: {
    changeTitle: function(event) {
      this.name = event.target.value;
    },
    random:function(){
      var sayi=Math.random();
      return sayi;
    }
  },
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
