<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="descreaseCounter">- Azalt</button>
<hr>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
<hr>
    <button class="btn btn-success" @click="incAsync({time:1000})">+ AsyncArttır</button>
    <button class="btn btn-danger" @click="decrementAsync">- Azalt</button>
<hr>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
    
  methods : {
      ...mapMutations([
          "increaseCounter",
          "descreaseCounter"
      ]),
      ...mapActions([
          "increment",
          "decrement",
          "incAsync"
      ]),
    //   increment(){
    //       this.$store.dispatch("increment")
    //   },
    //   decrement(){
    //       this.$store.dispatch("decrement")
    //   },
    //      incrementAsync(){
    //       this.$store.dispatch("incAsync")
    //   }
    // incrementCounter(){
    //  // this.$emit("counterEvent", 1);
    // // this.$store.state.counter++;
    //  this.$store.commit("increaseCounter")
    // },
    // decrementCounter(){
    //  //this.$store.state.counter--;
    //  //this.$store.commit("updateCounter",-1)
    //  this.$store.commit("descreaseCounter")
    // }
  }
}
</script>

<style>
</style>
