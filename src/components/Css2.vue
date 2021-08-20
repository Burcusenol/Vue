<template>
  <div id="app">
    <div class="box" :style="{ backgroundColor: color }"></div>
    <div class="box" :style="[customStyle, { witdh: yukseklik + 'px' }]"></div>
    <div class="box" :style="customStyle"></div>
    <hr />
    <input type="text" v-model="color" />
    <input type="text" v-model="height" />
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      attachedClass: false,
      color: "green",
      yukseklik: 100,
    };
  },
  methods: {},
  computed: {
    divClass: function() {
      return {
        yellow: this.attachedClass,
        blue: !this.attachedClass,
      };
    },
    customStyle: function() {
      return {
        backgroundColor: this.color,
        height: this.yukseklik + "px",
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
</style>