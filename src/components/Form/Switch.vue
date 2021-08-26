<template>
  <div>
    <div id="on" @click="switched(true)" :class="{ active: value }">Açık</div>
   <div id="off" @click="switched(true)" :class="{ active: !value }">Kapalı</div>
 
  </div>
</template>

<script>
export default {
   
    props:["value"],
    methods:{
        switched(isOn){
            this.$emit("input",isOn)
        }

    }
};
</script>
