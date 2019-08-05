<template>
  <div class="home_page">
    <div id="website_header">
      <div id="my_logo"></div>
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
    <div id="website_nav" :class="{ 'scrolled': scrollY > 336, 'dark': activeSection === 'connect_section' }">
      <div class="links_wrapper">
        <a @click="scrollTo(l.id)" class="link" :class="{ 'active': activeSection === l.id }" v-for="(l, i) in links" :key="i">
          <div>{{ l.name }}</div>
        </a>
      </div>
    </div>
    <div class="section_wrapper">
      <myAbout @goToConnect="scrollTo('connect_section')" id="about_section"></myAbout>
      <myWork id="work_section"></myWork>
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
    }
  },
  methods: {
    scrollTo(id) {
      var elmnt = document.getElementById(id);
      elmnt.scrollIntoView();
    }
  }
};
</script>
<style lang="scss" scoped>
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
  padding: 2rem 0;
  position: relative;
  #my_logo {
    animation: 1.25s ease-out 0s 1 textSlideIn;
    background-image: url(../assets/images/logo-white.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 250%;
    height: 12rem;
    width: 12rem;
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
        fill: $white;
      }
      .light {
        fill: $gray-lt;
      }
      .med {
        fill: $gray-med;
      }
    }
  }
}
#website_nav {
  background-color: $white;
  border-bottom: 1px solid $gray-border;
  padding-top: 5rem;
  position: -webkit-sticky;
  position: sticky;
  top: -5rem;
  transition: box-shadow .15s linear, background-color .25s linear;
  z-index: 3;
  &.scrolled {
    border-bottom: none;
    box-shadow: 0 2px 5px 0 rgba(#111, 0.2);
  }
  &.dark {
    background-color: #343638;
    box-shadow: 0 2px 5px 0 rgba(#111, 0.4);
  }
  .links_wrapper {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 0 .5rem;
    width: 20rem;
    transform: translateX(calc(50vw - 10.5rem));
    transition: transform .2s ease-out;
    .link {
      border-radius: 4px;
      color: $text-secondary;
      cursor: pointer;
      font-weight: 500;
      line-height: 3rem;
      padding: 0 1rem;
      position: relative;
      text-align: center;
      text-decoration: none;
      &:hover {
        color: $blue;
      }
      &.active::after {
        height: 3px;
      }
      @include mobile {
        line-height: 3.5rem;
      }
      &::after {
        background-color: $blue;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        content: "";
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: height .2s ease-out;
      }
    }
  }
}
.section_wrapper {
  //
}

</style>
