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
        <hr />
        <transition :name="fade" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">
            Bu bir alert kutusudur.
          </div>
          <div class="alert alert-danger" v-else key="danger">
            Bu bir alert kutusudur.
          </div>
        </transition>
        <hr />
        <button class="btn btn-info" @click="showJS = !showJS">
          Göster/Gizle
        </button>
        <br /><br />
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled"
        >
          <div class="alert alert-success" v-if="showJS">
            Bu bir alert kutusudur.
          </div>
        </transition>
        <br /><br />
        <h3>Dinamik Component Geçiş</h3>
        <div class="button btn btn-primary" @click="currentComponent='appPost'">Post</div>
        <div class="button btn btn-danger" @click="currentComponent='appHome'">Home</div>
        <transition name="fade" mode="out-in">
          <component :is="currentComponent"></component>
        </transition>
        <hr>
        <button @click="addNewItem" class="btn btn-danger">Yeni Eleman Ekle</button>
        <ul class="list group">
          <transition-group name="slide">
             <li v-for="(number,index) in list" :key="index" class="list-group-item" @click="removeItem(index)">Number : {{number}}</li>
             </transition-group>
         

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./components/Animations&Transition/Home.vue";
import Post from "./components/Animations&Transition/Post.vue";
export default {
  components: {
    appHome: Home,
    appPost: Post,
  },
  data() {
    return {
      show: false,
      activeEffect: "fade",
      showJS: false,
      elementWidth: 100,
      currentComponent:Home,
      list:[1,2,3,4,5]
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("before enter");
      this.elementWidth = 100;
      el.style.witdh = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log(" enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.witdh = el.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
      done();
    },
    afterEnter() {
      console.log("after enter");
    },
    afterEnterCancelled() {
      console.log("after enter cancelled");
    },
    beforeLeave(el) {
      console.log("before leave");
      this.elementWidth = 300;
      el.style.witdh = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log(" leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.witdh = el.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
      done();
    },
    afterLeave() {
      console.log("after leave");
    },
    afterLeaveCancelled() {
      console.log("after leave cancelled");
    },
    addNewItem(){
      const position=Math.floor(Math.random() * this.list.length)
      this.list.splice(position,0,this.list.length+1)
    },
    removeItem(index){
      this.list.splice(index,1)
    }
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

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move{
transition: transform 1s;
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
