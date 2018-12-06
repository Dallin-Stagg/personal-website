<template>
  <div class="my-navigation">
    <div class="nav_bar" @click="$store.commit('toggleMenu')">
      <i class="fa fa-bars"></i>
      <span>Menu</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      routes: ['Home', 'Experience', 'Portfolio'],
      //
      scrollPosition: null,
      viewpointHeight: window.innerHeight
    }
  },
  computed: {
    activeRoute() {
      return this.$route.name
    },
    flipPoint() {
      return this.viewpointHeight * (.6)
    },
    menuOpen() {
      return this.$store.state.menuOpen
    }
  },
  methods: {
    handleScroll: function () {
      this.scrollPosition = window.scrollY
    },
    go(routeName) {
      this.toggleMenu()
      this.$router.push({ name: routeName })
    },
    toggleModal() {
      this.toggleMenu()
      this.$store.commit('toggleModal')
    },
    toggleMenu() {
      if (this.menuOpen) {
        this.$store.commit('toggleMenu')
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/styles/global-styles.scss';
.nav_bar {
  background-color: rgba($white, .95);
  border-radius: 1.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  cursor: pointer;
  height: 3rem;
  padding: 0 1.5rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  user-select: none;
  z-index: 5;
  @include mobile {
    width: calc(100% - 2rem);
  }
  i {
    color: $gray-dk;
    line-height: 3rem;
  }
  span {
    color: $gray-dk;
    font-weight: 600;
    padding-left: .5rem;
    @include mobile {
      display: none;
    }
  }
}
</style>
