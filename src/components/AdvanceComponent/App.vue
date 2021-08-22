<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">
          Mavi Temayı Yükle
        </button>
        <button @click="selectedComponent = 'appGreen'" class="btn btn-success">
          Yeşil Temayı Yükle
        </button>
        <button @click="selectedComponent = 'appRed'" class="btn btn-danger">
          Kırmızı Temayı Yükle
        </button>
        <hr />

      <p>Şu an {{selectedComponent}}' desiniz.</p>

        <keep-alive>
          <component :is="selectedComponent">
          </component>
        </keep-alive>
        <!-- <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red>  -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Homework8/Blue.vue";
import Green from "./components/Homework8/Green.vue";
import Red from "./components/Homework8/Red.vue";

export default {
  data() {
    return {
      selectedComponent: "",
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
};
</script>

<style></style>
