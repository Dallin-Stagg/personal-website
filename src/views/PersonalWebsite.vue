<template>
  <div id="my-website">
    <div id="view" @click="closeMenu()" v-on:scroll.passive="onScroll">
      <router-view :scrollY="scrollFromTop"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "Website",
  data() {
    return {
      scrollFromTop: 0
    }
  },
  computed: {
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
    },
    onScroll() {
      var viewDiv = document.getElementById("view");
      this.scrollFromTop = viewDiv.scrollTop;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/styles/global-styles.scss";
/* eslint-disable */

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

}
</style>
