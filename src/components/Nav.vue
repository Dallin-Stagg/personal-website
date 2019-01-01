<template>
  <div class="my-navigation" :style="{ backgroundPosition: '0px -' + this.scrollPosition / 10 + 'px' }">
    <div class="nav_bar" @click="$store.commit('toggleMenu')">
      <i class="fa fa-bars"></i>
    </div>
    <nav class="nav_section">
      <div class="personal_logo"></div>
      <div class="item" v-for="(route, i) in routes" :key="i" @click="go(route)" :class="{ 'active': activeRoute === route }">{{ route }}</div>
      <br>
      <div class="icon_item" @click="toggleModal()">
        <div class="tooltip">Contact me</div>
        <i class="fa fa-envelope"></i>
      </div>
      <div class="icon_item" @click="openLink('https://www.linkedin.com/in/dallin-stagg')">
        <div class="tooltip">LinkedIn</div>
        <i class="fab fa-linkedin-in"></i>
      </div>
      <div class="icon_item" @click="openLink('https://github.com/Dallin-Stagg')">  
        <div class="tooltip">Github</div>
        <i class="fab fa-github"></i>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      routes: ['Home', 'Resume', 'Portfolio'],
      scrollPosition: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.distanceFromTop)
  },
  computed: {
    activeRoute() {
      return this.$route.name
    },
    menuOpen() {
      return this.$store.state.menuOpen
    }
  },
  methods: {
    go(routeName) {
      this.toggleMenu()
      this.$router.push({ name: routeName })
    },
    openLink(link) {
      window.open(link)
    },
    toggleModal() {
      this.toggleMenu()
      this.$store.commit('toggleModal')
    },
    toggleMenu() {
      if (this.menuOpen) {
        this.$store.commit('toggleMenu')
      }
    },
    distanceFromTop() {
      this.scrollPosition = window.scrollY
      console.log(this.scrollPosition)
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/styles/global-styles.scss';
.my-navigation {
  background-image: url('../assets/images/overlay-striped.svg'), linear-gradient(10deg, #434343, $gray-dk);
  background-size: auto 140%;
  background-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 11rem;
  will-change: background-position;
  height: 100vh;
}
.nav_bar {
  background-color: rgba($white, .95);
  border-radius: 1.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  text-align: center;
  user-select: none;
  display: none;
  @include mobile {
    display: block;
    text-align: left;
    padding: 0 1.5rem;
    width: calc(100% - 2rem);
    top: .75rem;
  }
  i {
    color: $gray-dk;
    line-height: 3rem;
  }
}
.nav_section {
  
  .personal_logo {
    background-image: url('../assets/images/logo-white.png');
    background-size: 190%;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0px 2px 5px rgba(0,0,0,0.5));
    height: 7rem;
    margin: 1rem 0;
    width: 11rem;
  }
  .item {
    color: $white;
    cursor: pointer;
    font-size: .95rem;
    line-height: 2.7rem;
    text-indent: 1rem;
    text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
    width: 11rem;
    @include mobile {
      font-size: 1rem;
      line-height: 2.5rem;
      padding: 0 1.5rem;
      width: 6.5rem;
    }
    &:hover {
      background-color: rgba($white, .05);
    }
    &.active {
      background-color: rgba($white, .3);
    }
  }
  .icon_item {
    border: 1px solid $white;
    border-radius: 3.1rem;
    color: $white;
    cursor: pointer;
    line-height: 2.5rem;
    margin: .75rem 1rem;
    position: relative;
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
      .tooltip {
        display: block;
        @include mobile {
          display: none;
        }
      }
    }
    .tooltip {
      background-color: rgba($white, .5);
      border-radius: 1rem;
      color: $text-primary;
      display: none;
      font-size: .9rem;
      font-weight: 500;
      line-height: 2rem;
      position: absolute;
      top: .3rem;
      left: 3rem;
      text-shadow: none;
      width: 7rem;
    }
  }
}
</style>
