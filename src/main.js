import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "animate.css";
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import {routes} from './route'
export const eventBus = new Vue({
  methods: {
    data: {},
    sendToServerData(serverData) {
      this.$emit("serverDataSent", serverData);
    },
  },
});

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueRouter);
const router=new VueRouter({
  routes,
  mode:'history' //arada # olmadan urli çalıştırabiliriz
});


Vue.http.options.root="https://vue-resource-cd83a-default-rtdb.firebaseio.com"

 Vue.http.interceptors.push((request,next)=>{
// if(request.method=="POST"){
//   request.method="PUT"
// }
 next((response)=>{
response.json=()=>{
  return{
    userList:response.body
  }
}
 });
 });

Vue.filter("toLowerCase",(value)=>{
return value.toLowerCase();
})
//Vue.directive("color",);

Vue.filter("count",(value)=>{
  return value+ "("+ value.length+")";
})


new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
