<template>
  <div id="app">
    <!-- 1) Efekti Butona basarak başlatın. Efekt "highlight" ve/veya "shrink" class'ları arasında değişmelidir. Bu değişim her bir interval döngüsünde olmalıdır. ("effect" id' li div'e o anki aktif olan class eklenecektir.) -->
  <div>
    <button @click="startEffect">Efekti Başlat!</button>
    <div id="effect" :class="customStyle"></div>
  </div>
  <!-- 2) Birkaç tane CSS Class'ı üreterek bu Class'ları Array Syntax'ı ile aşağıdaki <div>' e ekleyiniz -->
  <div :class="['blue','font']">Henüz bir claas'ım yok :(</div>
  <!-- 3) Örnek birkaç tane Class üreterek (Ya da ürettiklerinizi kullanarak) <input> içerisine Class adı girerek hemen alttaki <div> elementine bu yazılan Class'ı eklemeyi yapınız. -->
  <div>
    <input type="text" :v-model="deneme" >
    <div :class="deneme">Bu bir denemedir...</div>
  </div>
  <!-- 4) Kullanıcının Class isimlerini girebileceği iki adet <input> elementimiz var. Bunları kullanarak hemen alttaki <div> elementinin Class'larini attached etmesini sağlayınız  -->
  <div>
    <input type="text" v-model="inp1">
    <input type="text" v-model="inp2">
    <div :class="['inp1','inp2']">input</div>
  </div>
  <!-- 5) 3.Uygulamayı tekrarlayın. Fakat bu sefer Class Adı yerine Denk gelecek Style Kodlarını ekleyiniz.  -->
  <div>
    <input type="text" v-model="style">
    <div :class="style">Bu style deneme işlemi</div>
  </div>
  <!-- 6) setInterval ve Style Binding kullanarak Basit bir progress bar üretin. Progress bar' ın çalışmasını buton'a basarak başlatın. -->
  <div>
    <button v-on:click="startProgress">Progress İşlemini Başlat!</button>
    <div class="progress" :style="{width : progress + 'px'}"></div>
  </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data: function() {
    return {
      effectClass: false,
      deneme:"",
      color: "red",
      yukseklik: 20,
      inp1:"",
      inp2:"",
      style:{
        backgroundColor:"red",
        width: '100px'
      },
      progress:0
    };
  },
  methods: {
    startEffect:function(){
      var vm=this;
      setInterval(function(){
        vm.effectClass= !vm.effectClass
      },1000)
    },
    startProgress:function(){
      var num=this;
      setInterval(function(){
        num.progress+=50;
      },100);
    }
  },
  computed: {
    divClass: function() {
      return {
        red: this.attachedClass,
        blue: !this.attachedClass,
      };
    },
    customStyle: function() {
      return {
        highligt: this.effectClass,
        shrink: !this.effectClass,
      };
    },
  },
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin-left: 5px;
}
.yellow {
  background-color: yellow;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.color{
  font-size: 14;
}
.progress{
  background-color: 14;
  width: 0px;
  height: 50px;
}
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}

</style>