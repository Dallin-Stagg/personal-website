import Vue from "vue";
import Router from "vue-router";
import PersonalWebsite from "@/views/PersonalWebsite.vue";
import Home from "@/views/Home.vue";
import Resume from "@/views/Resume.vue";
import Portfolio from "@/views/Portfolio.vue";
import Contact from "@/views/Contact.vue";
import BankFeed from "@/views/BankFeed.vue";
//
import Caroline from '@/views/Caroline.vue';

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
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/resume",
      name: "Resume",
      component: Resume
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/bank-feed",
      name: "Bank Feed",
      component: BankFeed
    },
    {
      path: "/caroline",
      name: "Caroline",
      component: Caroline
    }
  ]
});
