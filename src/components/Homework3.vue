
<template>
 <div>
      <!-- 1) value isimli property'nin değerine bakarak result için bir reactive kod yazınız. 
    
    Süreç ise  value 33'e eşit olmadığı durumlarda <p> elementinin içinde  "Henüz Bitmedi!!" 33 olduğunda ise "Tamamlandı" yazmalıdır.. 
    
    Bunun için gördüğünüz reactivity türlerinden birini kullanınız. (Not : Butonlar yardımıyla value property'nin değerini değiştirebilirsiniz ))   -->
    <div>
        <p>Şuanki Değer: {{ value }}</p>
        <button @click="value+=5">Add 5</button>
        <button @click="value+=1">Add 1</button>
        <p>{{ result }}</p>
    </div>
    <!-- 2) result property' değerini izleyerek 5 saniye sonra value'nun değerini sıfırlayınız. (ipucu: setTimeout(..., 5000) kullanılabilir.-->
    <div>
        <input type="text" :input="time">
        <p>{{ value }}</p>
    </div>
</div>
 
</template>

<script>

export default {
  name: "App",
   data: function() {
    return {
     value:0,
     time:5000,
    };
  },
  methods: {
  },
   computed: {
    result: function() {
      return this.value == 33 ? "Tamamlandı" : "Henüz Bitmedi!!"
    },
  },
  watch: {
    result:function(){
      var vm = this;
      setTimeout(function(){
        vm.value=0;
      },this.time)
    }
  }
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


