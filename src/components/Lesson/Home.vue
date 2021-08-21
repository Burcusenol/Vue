<template>
  <div id="app">
    <lamp-status v-for="lamp in 5" :key="lamp"></lamp-status>
  </div>
</template>



<script>
import LampStatus from '../../LampStatus.vue';

export default {
  components:{
    LampStatus
  },
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
