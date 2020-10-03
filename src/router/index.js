import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import HomePage from "../views/Home.vue";
// import UserTweets from "../components/UserTweets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/home",
    name: "home-page",
    component: HomePage
  },
  {
    path: "/tweets",
    name: "user-tweets",
    component: HomePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
