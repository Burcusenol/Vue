<template>
  <div id="app">

  <h1 ref="heading">{{ title }}</h1>
  <button v-on:click="show" ref="myButton">Paragrafı Göster</button>
  <p v-if="showParagraph">Her zaman göremeyebiliriz!!</p>
  
  </div>


 
</template>

<script>
export default {
  
  name: "App",
  data: function() {
    return {
      title: 'VueJS Instance',
    showParagraph: false
    }; 
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('VueJS Instance (Güncellendi)');
      this.$refs.myButton.innerText="Test!!"
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title değişti, yeni değer : ' + value);
    }
  }

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