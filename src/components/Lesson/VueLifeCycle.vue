<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <button @click="title='Değiştirildi'">Değiştir</button>
    <button @click="destroy">destroy</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
     title:"Vue"
    };
  },
  beforeCreate: function() {
    console.log("beforeCreate");
  },

  created: function() {
    console.log("created");
  },
  beforeMount: function() {
    console.log("beforeMount");
  },
  mounted: function() {
    console.log("mounted");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate");
  },
  updated: function() {
    console.log("updated");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy");
  },
  destroyed: function() {
    console.log("destroyed");
  },
  methods: {
   destroy:function(){
     this.$destroy();
   },
  
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title: function(value) {
      alert("Title değişti, yeni değer : " + value);
    },
  },
};

//console.log(this.$refs.heading.innerText="Bu ref tarafından değiştirilmiştir")
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
