
<template>
  <div id="app">
    <div
      @click="attachedClass = !attachedClass"
      :class="divClass"
      class="box"
    ></div>
    <div class="box"></div>
    <div class="box" :class="[color,{yellow:attachedClass}]"></div>
    <hr>
    <input type="text" v-model="color">
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      attachedClass: false,
      color:"green"
    };
  },
  methods: {},
  computed:{
    divClass:function(){
      return{
        yellow:this.attachedClass,
        blue: !this.attachedClass
      }
    }
  }
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
.blue{
  background-color:blue;
}
.green{
  background-color:green;
}
</style>
