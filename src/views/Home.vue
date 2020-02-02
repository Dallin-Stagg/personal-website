<template>
  <div class="home_page">
    <div id="website_header" :class="{ 'dark_theme': darkTheme }">
      <div id="my_logo" @click="toggleTheme()"></div>
      <div class="svg_wrapper">
        <!-- 
        preserveAspectRatio: makes sure the triangle is scalable
        viewbox: points stretches from the parent
        -->
        <svg preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon class="white" points="0,0 0,100 100,100 100,0 50,90" opacity="1"></polygon>
          <polygon class="med" points="0,7 50,97 100,7 100,10 50,100 0,10" opacity="1"></polygon>
        </svg>
      </div>
    </div>
    <div class="section_wrapper">
      <myAbout @goToContact="scrollTo('connect_section')" id="about_section"></myAbout>
      <myWork @goToContact="scrollTo('connect_section')" id="work_section"></myWork>
      <myConnect id="connect_section"></myConnect>
    </div>
  </div>
</template>

<script>
import MyAbout from '../components/About.vue';
import MyWork from "../components/Work.vue";
import MyConnect from '../components/Connect.vue';
export default {
  name: "Home",
  components: {
    myAbout: MyAbout,
    myWork: MyWork,
    myConnect: MyConnect
  },
  props: ['scrollY'],
  data() {
    return {
      links: [
        { name: "About", id: "about_section" },
        { name: "Work", id: "work_section" },
        { name: "Connect", id: "connect_section" }
      ]
    };
  },
  computed: {
    activeSection() {
      if (this.scrollY > 0) {
        let aboutEl = document.getElementById('about_section');
        let scrollAbout = aboutEl.offsetTop - aboutEl.scrollTop + aboutEl.clientTop - 80;
        let workEl = document.getElementById('work_section');
        let scrollWork = workEl.offsetTop - workEl.scrollTop + workEl.clientTop - 100;
        let connectEl = document.getElementById('connect_section');
        let scrollConnect = connectEl.offsetTop - connectEl.scrollTop + connectEl.clientTop - 50;
        if (this.scrollY >= scrollConnect) {
          return 'connect_section'
        } else if (this.scrollY >= scrollWork) {
          return 'work_section'
        } else if (this.scrollY >= scrollAbout) {
          return 'about_section'
        }
      }
      
      return ''
    },
    darkTheme() {
      return this.$store.state.darkTheme
    }
  },
  methods: {
    scrollTo(id) {
      var elmnt = document.getElementById(id);
      elmnt.scrollIntoView();
    },
    toggleTheme() {
      this.$store.commit('toggleTheme')
    }
  }
};
</script>
<style lang="scss">
@import "../assets/styles/global-styles.scss";
#website_header {
  background-image: linear-gradient(0deg, rgba(0,0,0, .2), rgba(0,0,0, .7)), url(../assets/images/Liquid-Cheese.svg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 4rem 0 6rem;
  position: relative;
  &.dark_theme {
    // background-image: linear-gradient(0deg, rgba(0,0,0, .1), rgba(0,0,0, .4)), url(../assets/images/Liquid-Cheese-dark.svg);
  }
  #my_logo {
    animation: 1.25s ease-out 0s 1 textSlideIn;
    background-image: url(../assets/images/logo-white.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 250%;
    height: 13rem;
    width: 13rem;
  }
  .svg_wrapper {
    height: calc(3rem + 3vw);
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    svg {
      width: 100%;
      height: 100%;
      .white {
        fill: var(--background-1);
      }
      .light {
        fill: var(--background-2);
      }
      .med {
        fill: var(--border);
      }
    }
  }
}
.section_wrapper {
  //
}

</style>
