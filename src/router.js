import Vue from "vue";
import Router from "vue-router";
import Website from "@/views/website.vue";
import Home from "@/views/home.vue";
import Resume from "@/views/resume.vue";
import Portfolio from "@/views/portfolio.vue";
import Contact from "@/views/contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Website",
      component: Website,
      children: [
        {
          path: "home",
          name: "Home",
          component: Home
        },
        {
          path: "resume",
          name: "Resume",
          component: Resume
        },
        {
          path: "portfolio",
          name: "Portfolio",
          component: Portfolio
        },
        {
          path: "contact",
          name: "Contact",
          component: Contact
        }
      ]
    }
  ]
});
