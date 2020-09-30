import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
