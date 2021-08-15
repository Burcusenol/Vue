<template>
 <div id="exercise">
    <!-- 1) Butona tıklanıldığında bir alert kutusu çıkartınız -->
    <div>
        <button v-on:click="showAlert">Alert Göster</button>
    </div>
    <!-- 2) "keydown" event'ini dinleyerek value değişkeni içerisinde yazdığınız veriyi saklayın. (ipucu: event.target.value size yazdığınız değeri verebilir.) -->
    <div>
        <input type="text" v-on:keydown="show">
        <p>{{ value }}</p>
    </div>
    <!-- 3) 2.Uygulamayı düzenleyerek eğer keydown ENTER ise yazdığınız verinin value değerine aktarılmasını sağlayın -->
    <div>
        <input type="text" v-on:keydown.enter="show">
        <p>{{ value }}</p>
    </div>
</div>
 
</template>

<script>

export default {
  name: "App",
  
  methods: {
    
    showAlert:function(){
      alert('Alert');
    },
    show:function(event){
      alert(event.target.value)
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

