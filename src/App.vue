<template>
  <div id="app">
    <transition name="haze_slide">
      <div class="haze" v-if="showHaze"></div>
    </transition>
    <router-view :scrollY="scrollPosition"></router-view>
  </div>
</template>
<script>

export default {
  name: "app",
  data() {
    return {
      scrollPosition: 0
    }
  },
  mounted() {
    if (this.$route.path === "/") {
      this.$router.push({ name: "Home" });
    }
    // window.addEventListener('scroll', this.distanceFromTop)
  },
  computed: {
    routeName() {
      return this.$route.name
    },
    showHaze() {
      return false
    }
  },
  methods: {
    distanceFromTop() {
      this.scrollPosition = window.scrollY
    },
    openLink(link) {
      window.open(link);
    }
  }
};
</script>
<style lang="scss">
/* eslint-disable */
@import "./assets/styles/global-styles.scss";
@import "./assets/styles/component-styles.scss";

body {
  margin: 0;
}
html {
  font-size: 16px;
  line-height: 1.5;
  scroll-behavior: smooth;
  #confetti-canvas {
    // insures it's over all other z-index: 1 elements
    z-index: 1;
  }
}
#app {
  background-color: $white;
  font-family: "Quicksand", sans-serif, system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
// vue transition tag stylings
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
// PERSONAL WEBSITE STYLES



</style>
