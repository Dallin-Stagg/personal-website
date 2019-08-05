import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

import BankFeed from "@/views/BankFeed.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/bank-feed",
      name: "Bank Feed",
      component: BankFeed
    }
  ]
});
