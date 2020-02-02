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
    this.toggleTheme()
    // window.addEventListener('scroll', this.distanceFromTop)
  },
  computed: {
    routeName() {
      return this.$route.name
    },
    showHaze() {
      return false
    },
    darkTheme() {
      return this.$store.state.darkTheme
    }
  },
  watch: {
    darkTheme() {
      this.toggleTheme()
    }
  },
  methods: {
    distanceFromTop() {
      this.scrollPosition = window.scrollY
    },
    openLink(link) {
      window.open(link);
    },
    toggleTheme() {
      if (!this.darkTheme) {
        document.documentElement.style.setProperty('--background-1', '#FFFFFF')
        document.documentElement.style.setProperty('--background-2', '#F7F7F9')
        document.documentElement.style.setProperty('--border', '#d3dde5')
        document.documentElement.style.setProperty('--text-1', '#3a4347')
        document.documentElement.style.setProperty('--text-2', '#6c7880')
        document.documentElement.style.setProperty('--accent-1', '#0073FC')
        document.documentElement.style.setProperty('--accent-2', '#0056bd')
      } else {
        document.documentElement.style.setProperty('--background-1', '#272728')
        document.documentElement.style.setProperty('--background-2', '#212123')
        document.documentElement.style.setProperty('--border', '#38383A')
        document.documentElement.style.setProperty('--text-1', '#F1F1F1')
        document.documentElement.style.setProperty('--text-2', '#ACACAC')
        document.documentElement.style.setProperty('--accent-1', '#13F2DF')
        document.documentElement.style.setProperty('--accent-2', '#008E82')
      }
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
  background-color: var(--background-1);
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
