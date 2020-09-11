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
    this.toggleTheme(true)
    window.addEventListener('scroll', this.distanceFromTop)
  },
  computed: {
    routeName() {
      return this.$route.name
    },
    showHaze() {
      return false
    },
    theme() {
      return this.$store.state.theme
    }
  },
  watch: {
    theme() {
      this.toggleTheme(false)
    }
  },
  methods: {
    distanceFromTop() {
      this.scrollPosition = window.scrollY
    },
    openLink(link) {
      window.open(link);
    },
    toggleTheme(first) {
      if (first) {
        // bg5: '#212123',
        document.documentElement.style.setProperty('--bg-1', '#ffffff')
        document.documentElement.style.setProperty('--bg-2', '#f7f7f9')
        document.documentElement.style.setProperty('--bg-3', '#d3dde5')
        document.documentElement.style.setProperty('--bg-4', '#272728')
        document.documentElement.style.setProperty('--bg-5', '#212123')
        document.documentElement.style.setProperty('--text-1', '#3a4347')
        document.documentElement.style.setProperty('--text-2', '#6c7880')
        document.documentElement.style.setProperty('--ac-1', '#0073FC')
        document.documentElement.style.setProperty('--ac-2', '#0056bd')
        document.documentElement.style.setProperty('--ac-3', '#FFB100')
      } else {
        var theme = this.$store.state.theme
        document.documentElement.style.setProperty('--bg-1', theme.bg1)
        document.documentElement.style.setProperty('--bg-2', theme.bg2)
        document.documentElement.style.setProperty('--bg-3', theme.bg3)
        document.documentElement.style.setProperty('--bg-4', theme.bg4)
        document.documentElement.style.setProperty('--bg-5', theme.bg5)
        document.documentElement.style.setProperty('--ac-1', theme.ac1)
        document.documentElement.style.setProperty('--ac-2', theme.ac2)
        document.documentElement.style.setProperty('--ac-3', theme.ac3)
        if (theme.theme === 'light') {
          document.documentElement.style.setProperty('--text-1', '#3a4347')
          document.documentElement.style.setProperty('--text-2', '#6c7880')
        } else {
          document.documentElement.style.setProperty('--text-1', '#E8E8EA')
          document.documentElement.style.setProperty('--text-2', '#D9D9DB')
        }
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
  background-color: var(--bg-1);
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
