import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "animate.css";
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


Vue.filter("toLowerCase",(value)=>{
return value.toLowerCase();
})
//Vue.directive("color",);

Vue.filter("count",(value)=>{
  return value+ "("+ value.length+")";
})


new Vue({
  render: (h) => h(App),
}).$mount("#app");
