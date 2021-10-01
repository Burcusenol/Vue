import Home from "../src/components/Vue-Router/Home.vue";
import Header from "./components/Vue-Router/Header.vue";


const User= resolve=>{
    require.ensure(["../src/components/Vue-Router/User/User.vue"],()=>{
        resolve(require("../src/components/Vue-Router/User/User.vue"));
    })
}


import UserStart from "../src/components/Vue-Router/User/UserStart";
import UserDetail from "../src/components/Vue-Router/User/UserDetail";
import UserEdit from "../src/components/Vue-Router/User/UserEdit";

export const routes = [
  {
    path: "",
    name: "anasayfa",
    components: {
      default: Home,
      "header-top": Header,
    },
  },
  {
    path: "/user",
    name: "kullanici",
    components: {
      default: User,
      "header-bottom": Header,
    },
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail,beforeEnter:(to,from,next)=>{
            next();
      } },
      { path: ":id/edit", component: UserEdit, name: "userEdit" },
    ],
  },
  {path:"/redirect",redirect:"/user"},
  {path:"*",redirect:"/"}
];
