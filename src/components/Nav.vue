<template>
  <div class="my-navigation">
    <div class="nav_bar" @click="$store.commit('toggleMenu')">
      <i class="fa fa-bars"></i>
      <span>Menu</span>
    </div>
    <nav class="nav_section">
      <div class="item" v-for="(route, i) in routes" :key="i" @click="go(route)" :class="{ 'active': activeRoute === route }">{{ route }}</div>
      <br>
      <div class="icon_item"><i class="fa fa-file"></i></div>
      <div class="icon_item"><i class="fab fa-linkedin-in"></i></div>
      <div class="icon_item"><i class="fab fa-github"></i></div>
    </nav>
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
  width: 3rem;
  text-align: center;
  position: fixed;
  top: 1rem;
  left: 1rem;
  user-select: none;
  z-index: 5;
  @include mobile {
    text-align: left;
    padding: 0 1.5rem;
    width: calc(100% - 2rem);
  }
  i {
    color: $gray-dk;
    line-height: 3rem;
  }
  span {
    display: none;
    color: $gray-dk;
    font-weight: 600;
    padding-left: .5rem;
    @include mobile {
      display: none;
    }
  }
}
.nav_section {
  position: absolute;
  left: 0;
  top: 7rem;
  .item {
    border: 1px solid $white;
    border-radius: 3.1rem;
    color: $white;
    cursor: pointer;
    line-height: 2.5rem;
    margin: 1rem;
    padding: 0 1rem;
    text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
    @include mobile {
      font-size: 1.1rem;
      line-height: 3rem;
      padding: 0 1.5rem;
    }
    &:hover {
      background-color: rgba($white, .05);
    }
    &.active {
      background-color: rgba($white, .1);
    }
  }
  .icon_item {
    border: 1px solid $white;
    border-radius: 3.1rem;
    color: $white;
    cursor: pointer;
    line-height: 2.5rem;
    margin: 1rem;
    text-align: center;
    width: 2.5rem;
    text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
    @include mobile {
      font-size: 1.1rem;
      line-height: 3rem;
      width: 3rem;
    }
    &:hover {
      background-color: rgba($white, .1);
    }
  }
}
</style>
