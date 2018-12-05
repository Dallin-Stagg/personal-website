<template>
  <div class="my-navigation">
    <div class="white_bar" :class="{ 'dropped': scrollPosition > flipPoint }"></div>
    <nav class="desktop" :class="{ 'dropped': scrollPosition > flipPoint }">
      <div class="left nav_btn" v-for="(route, i) in routes" :key="i" @click="go(route)" :class="{ 'active_route': activeRoute === route }">{{ route }}<i class="fa fa-circle"></i></div>
      <a><div class="right btn">Résumé &nbsp;<i class="fa fa-file-download"></i></div></a>
    </nav>
    <div class="mobile_bar" :class="{ 'dropped': scrollPosition > flipPoint }" @click="mobileMenuOpen = !mobileMenuOpen">
      <i class="fa fa-bars"></i>
    </div>
    <nav class="mobile_nav" :class="{ 'dropped': scrollPosition > flipPoint, 'opened': mobileMenuOpen }">
      <div class="link" v-for="(route, i) in routes" :key="i" @click="go(route)" :class="{ 'active_route': activeRoute === route }">{{ route }}<i class="fa fa-circle"></i></div>
      <div class="btn mobile_nav_btn">Résumé &nbsp;<i class="fa fa-file-download"></i></div>
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
      viewpointHeight: window.innerHeight,
      //
      mobileMenuOpen: false
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    activeRoute() {
      return this.$route.name
    },
    flipPoint() {
      return this.viewpointHeight * (.6)
    }
  },
  methods: {
    handleScroll: function () {
      this.scrollPosition = window.scrollY
    },
    go(routeName) {
      this.mobileMenuOpen = false
      this.$router.push({ name: routeName })
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/styles/global-styles.scss';
.white_bar {
  background-image: linear-gradient(0deg,rgba($white, .5),$white);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: -5rem;
  left: 0;
  height: 4rem;
  width: 100%;
  z-index: 4;
  transition: .25s top ease-out;
  &.dropped {
    top: 0;
  }
  @include mobile {
    display: none;
  }
}
.desktop {
    box-sizing: border-box;
    height: 4rem;
    padding: 0 1.5rem;
    overflow: visible;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    @include mobile {
      display: none;
    }
    &.dropped {
      .nav_btn {
        background-color: rgba($gray-med, .6);
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.3);
        text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.8);
        &:hover {
            background-color: rgba($gray-med, .9);
        }
        &.active_route {
            background-color: rgba($gray-med, .9);
        }
      }
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
    .nav_btn {
        background-color: rgba(white, .3);
        border: 2px solid $white;
        border-radius: 1.5rem;
        box-shadow: inset 0px 1px 10px rgba(0, 0, 0, 0.5);
        color: $white;
        cursor: pointer;
        font-size: .9rem;
        font-weight: 600;
        line-height: calc(2.3rem - 4px);
        margin: .85rem .5rem;
        padding: 0 1.75rem;
        position: relative;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8);
        transition: .2s background-color ease-out;
        i {
            font-size: .5rem;
            line-height: 2rem;
            position: absolute;
            top: 0rem;
            left: -.2rem;
            opacity: 0;
            transition: .2s left ease-out, .2s opacity ease-out;
        }
        &:hover {
            background-color: rgba(white, .4);
        }
        &.active_route {
            background-color: rgba(white, .5);
            i {
                left: .7rem;
                opacity: 1;
            }
        }
    }
}
.mobile_bar {
  display: none;
  @include mobile {
    display: block;
  }
  //
  background-color: rgba($white, .95);
  border-radius: 1.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  height: 3rem;
  padding: 0 1.5rem;
  overflow: visible;
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: calc(100% - 2rem);
  z-index: 5;
  transition: border-radius .2s ease-out, left .2s ease-out, top .2s ease-out, width .2s ease-out;
  &.dropped {
    border-radius: 0;
    left: 0;
    top: 0;
    width: 100%;
  }
  i {
    color: $gray-dk;
    line-height: 3rem;
  }
}
.mobile_nav {
  display: none;
  @include mobile {
    display: block;
  }
  //
  background-color: rgba($white, .95);
  border-radius: 1.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  transform: scale(.9);
  overflow: visible;
  opacity: 0;
  position: fixed;
  top: -3rem;
  left: 1rem;
  width: calc(100% - 2rem);
  z-index: 4;
  transition: top .2s ease-out, transform .2s ease-out, opacity .2s ease-out, width .2s ease-out, border-radius .2s ease-out, left .2s ease-out;
  .link:not(:last-child) {
    border-bottom: 2px solid $gray-border;
  }
  .link {
    color: $gray-dk;
    font-size: 1.2rem;
    font-weight: 500;
    height: 3.5rem;
    line-height: 3.5rem;
    padding: 0 1.5rem;
    position: relative;
    transition: padding .2s ease-out;
    i {
      color: $blue;
      font-size: .8rem;
      opacity: 0;
      position: absolute;
      left: 0rem;
      top: 1.4rem;
      text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
      transition: left .2s ease-out, opacity .2s ease-out;
    }
    &.active_route {
      padding-left: 3rem;
      i {
        left: 1.5rem;
        top: 1.4rem;
        opacity: 1;
      }
    }
  }
  .mobile_nav_btn {
    margin: 1rem auto;
    text-align: center;
    width: 8rem;
  }
  &.opened {
    opacity: 1;
    top: 5rem;
    transform: scale(1);
  }
  &.dropped {
    border-radius: 0;
    left: 0;
    transform: scale(1);
    width: 100%;
    &.opened {
      top: 3rem;
    }
  }
}
</style>
