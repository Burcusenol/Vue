<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>Kullanıcının Id Bilgisi : {{ $route.params.id }}</p>

    <router-link tag="button" class="btn btn-primary" :to="navigationLink">
      Kullanıcıyı Düzenle
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigationLink: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { name: "burcu", lastName: "senol" },
        hash:'#data'
      },
    };
  },
  beforeRouteEnter(to,from,next){
    next()
  }
};
</script>
