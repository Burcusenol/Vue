<template>
  <div id="app">
    <p>{{ hi() }} <a :href="link">Link</a></p>
    <p v-once>{{ title }}</p>
    <p v-html="blogLink"></p>
    <button @click="showAlert('burcu')">Alert göster</button>

      <span v-on:mousemove.stop>Gizli Bölme</span>
    
<input type="text" v-on:keyup.enter="show">
    
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      counter:0,
      x:0,
      y:0,
      title: "Abcsdf ",
      description: "Bu bir vue ",
      message: "hoşgeldin",
      link: "https://www.github.com",
      blogLink: " <a href='http://vuejsegitim.com'>Link</a>",
    };
  },
  methods: {
    changeTitle: function(event) {
      this.description = event.target.value;
    },
    hi: function() {
      this.title = "Merhaba!!";
      return this.title;
    },
    showAlert:function(name){
      alert(name);
    },
    increase:function(step){
      this.counter+=step;
    },
    updateCoords:function(step,event){
      this.counter+=step;
      this.x=event.clientX;
      this.y=event.clientY;
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

