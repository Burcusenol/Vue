<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr />

        <select class="form-control" v-model="activeEffect">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>

        <br />
        <button class="btn btn-info" @click="show = !show">Göster/Gizle</button>
        <br /><br />
        <transition :name="activeEffect" appear>
          <div class="alert alert-success" v-show="!show">
            Bu bir alert kutusudur.
          </div>
        </transition>
        <hr />
        <transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-show="!show">
            Bu bir alert kutusudur.
          </div>
        </transition>
        <hr />
        <transition
          enter-active-class="animated shake"
          leave-active-class="animated swing"
          appear
        >
          <div class="alert alert-warning" v-show="!show">
            Bu bir alert kutusudur.
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      activeEffect: "fade",
    };
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
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
  }
}
</style>
