<template>
  <div id="my-website">
    <myNav></myNav>
    <div id="view" :class="{ 'menu_open': menuOpen }" @click="closeMenu()">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MyNav from "../components/Nav.vue";

export default {
  name: "Website",
  components: {
    myNav: MyNav
  },
  computed: {
    menuOpen() {
      return this.$store.state.menuOpen;
    },
    routeName() {
      return this.$route.name;
    }
  },
  watch: {
    routeName() {
      // creates desired scroll behavior work around (scrolls to top on page change if using height-bound view)
      var viewDiv = document.getElementById("view");
      this.$confetti.stop();
      viewDiv.scrollTop = 0;
    }
  },
  mounted() {
    if (this.$route.name === "Personal Website") {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    closeMenu() {
      if (this.$store.state.menuOpen) {
        this.$store.commit("toggleMenu");
      }
    }
  }
};
</script>
<style lang="scss">
@import "../assets/styles/global-styles.scss";
/* eslint-disable */
.alert_slide-enter-active,
.alert_slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.alert_slide-enter,
.alert_slide-leave-to {
  opacity: 0;
  transform: translateX(30rem);
}

#my-website {
  background-image: url(../assets/images/overlay-striped.svg),
    linear-gradient(10deg, #434343, #333);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  perspective: 1000px;
  width: 100%;
}
#view {
  background-color: $gray;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.4);
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 100%;
  will-change: transform;
  transition: transform 0.25s ease-out;
  &.menu_open {
    transform: rotateY(-10deg) scale(0.8) translateX(10rem);
  }
  @include mobile {
    &.menu_open {
      // transform: rotateY(-25deg) scale(0.7) translateX(18rem);
      transform: rotateX(15deg) scale(0.6) translateY(18rem);
    }
  }
}
</style>
