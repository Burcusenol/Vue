<template>
     <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{width: progress+'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{currentItem}}
      </div>
    </div>
</template>
<script>
import {eventBus} from '../../../main'
export default {
  data(){
    return{
      currentItem:0,
      progress:0
    }
  },
  created(){
    eventBus.$on("progressBarUpdated",(productListCount)=>{
      this.currentItem=productListCount,
      this.progress=this.currentItem*10
    })
  }
}
</script>