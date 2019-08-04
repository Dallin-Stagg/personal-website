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
    <div id="website_nav" :class="{ 'scrolled': scrollY > 320 }">
      <div class="links_wrapper">
        <a :href="'#' + l.id" class="link active" v-for="l in links">
          <div>{{ l.name }}</div>
        </a>
      </div>
    </div>
    <div class="section_wrapper">
      <myWork></myWork>
    </div>
  </div>
</template>

<script>
import MyWork from "../components/Work.vue";
export default {
  name: "Home",
  components: {
    myWork: MyWork
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
  transition: box-shadow .15s linear;
  z-index: 5;
  &.scrolled {
    border-bottom: none;
    box-shadow: 0 2px 4px 0 rgba(#111, 0.2);
    
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
      font-weight: 500;
      line-height: 3rem;
      padding: 0 1rem;
      position: relative;
      text-align: center;
      text-decoration: none;
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
        height: 3px;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
}
.section_wrapper {
  margin: 0 auto;
  width: 40rem;
}

</style>
