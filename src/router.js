import Vue from "vue";
import Router from "vue-router";
import PersonalWebsite from "./views/PersonalWebsite.vue";
import Home from "./views/Home.vue";
import Resume from "./views/Resume.vue";
import Portfolio from "./views/Portfolio.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Personal Website",
      component: PersonalWebsite,
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
