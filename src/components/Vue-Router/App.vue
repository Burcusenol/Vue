<template>
  <div class="container">
    <div class="row">
      <h3>Vue-Router</h3>
      <div class="col md 12">
        <br>
        <router-view name="header-top"></router-view>
        <transition name="slider" mode="out in">
          <router-view></router-view>
        </transition>
         
          <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default{
 components:{
   
 },
  data() {
    return {

    };
  },
  methods: {}
}
</script>

<style>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }}
  </style>
