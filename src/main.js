import Vue from 'vue'
import App from './App.vue'

export const eventBus=new Vue({
  methods:{
    data:{
      
    },
    sendToServerData(serverData){
      this.$emit('serverDataSent',serverData)
    }
  }
});

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

