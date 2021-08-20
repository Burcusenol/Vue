<template>
  <div id="app">

     <button v-on:click="counter++">Arttır</button>
    <button v-on:click="counter--">Azalt</button>
    <button v-on:click="secondCounter+=2">2.counter</button>
     <p>Counter :{{ counter }} | {{ secondCounter }}</p>
    <p>{{ result() }} | {{ output }}</p>
    
  </div>
</template>

<script>

export default {
  name: "App",
  data: function() {
    return {
      counter:0,
      secondCounter: 0,
    };
  },
  methods: {
     result: function() {
      console.log("Metod çalıştı");
      return this.counter > 10 ? "10'dan büyük" : "10'dan küçük";
    },
  },
   computed: {
    output: function() {
      console.log("Computed çalıştı.");
      return this.counter > 10 ? "10'dan büyük" : "10'dan küçük";
    },
  },
  watch: {
    counter:function(){
      var vm = this;
      setTimeout(function(){
        vm.counter=0;
      },1500)
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
