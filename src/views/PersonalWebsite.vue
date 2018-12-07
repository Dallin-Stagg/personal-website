<template>
  <div id="my-website">
    <myNav></myNav>
    <myResume v-if="showResume"></myResume>
    <div id="view" :class="{ 'menu_open': menuOpen }">
      <router-view/>
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
import MyNav from '../components/Nav.vue'
import MyResume from '../components/Resume.vue'
import MyFooter from '../components/Footer.vue'

export default {
  name: 'app',
  components: {
    myNav: MyNav,
    myResume: MyResume,
    myFooter: MyFooter
  },
  computed: {
    showResume() {
      return this.$store.state.showResume
    },
    menuOpen() {
      return this.$store.state.menuOpen
    }
  },
  mounted() {
      if (this.$route.name === 'Personal Website') {
          this.$router.push({ name: 'Home' })
      }
  }
}
</script>
<style lang="scss">
@import '../assets/styles/global-styles.scss';
/* eslint-disable */
#my-website {
  background: linear-gradient(10deg, #C06C84, #6C5B7B, #355C7D);
  overflow: hidden;
  perspective: 1000px;
  width: 100%;
}
#view {
  background-color: $white;
  height: 100vh;
  overflow-y: scroll;
  transition: .25s ease-out transform;
  z-index: 2;
  will-change: transform;
  &.menu_open {
    transform: rotateY(-10deg) scale(.8) translateX(10rem);
    @include mobile {
      transform: rotateY(-40deg) scale(.7) translateX(20rem);
    }
  }
}

</style>
