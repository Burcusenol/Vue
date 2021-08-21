<template>
  <div id="app">
    <p>Lamba Durumu :{{ status }}</p>
    <button @click="openLamb">Lambayı Aç</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      status: "Kapalı",
    };
  },
  methods: {
    openLamb() {
      this.status = "Açık";
    },
  },
  computed: {},
  watch: {},
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
