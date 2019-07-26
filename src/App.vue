<template>
  <div id="app">
    <myNav></myNav>
    <div id="website-container">
      <router-view :scrollY="scrollPosition"></router-view>
      <myFooter v-if="routeName !== 'Home'"></myFooter>
    </div>
  </div>
</template>
<script>
import MyNav from "./components/Nav.vue";
import MyFooter from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    myNav: MyNav,
    myFooter: MyFooter
  },
  data() {
    return {
      scrollPosition: 0
    }
  },
  mounted() {
    if (this.$route.path === "/") {
      this.$router.push({ name: "Home" });
    }
    window.addEventListener('scroll', this.distanceFromTop)
  },
  computed: {
    routeName() {
      return this.$route.name
    },
    menuOpen() {
      return this.$store.state.menuOpen
    }
  },
  methods: {
    distanceFromTop() {
      this.scrollPosition = window.scrollY
    }
  }
};
</script>
<style lang="scss">
/* eslint-disable */
@import "./assets/styles/global-styles.scss";

body {
  margin: 0;
}
html {
  font-size: 16px;
  line-height: 1.5;
}
#app {
  background-color: #212121;
  font-family: "Quicksand", sans-serif, system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  user-select: none;
  #website-container {
    transition: .25s filter ease;
  }
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

.ds_btn {
  border-radius: 4px;
  color: $white;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 2.3rem;
  padding: 0 1.5rem;
  text-align: center;
  text-transform: uppercase;
  margin: 1rem auto;
  transition: background-color 0.2s ease-out, transform 0.2s ease-out;
  @include mobile {
    font-size: 0.85rem;
    line-height: 2.7rem;
    padding: 0 2.4rem;
  }
  &.grad {
    background: linear-gradient(-60deg, $purple-dk, #3a66c4, $blue, $mint);
    box-shadow: 0 2px 4px 2px rgba($gray-dk, 0.5);
    &:hover {
      box-shadow: 0 2px 7px 2px rgba($gray-dk, 0.9);
    }
    &.disabled {
      opacity: .5;
      box-shadow: none;
      cursor: not-allowed;
    }
  }
  &.green {
    background-color: $green;
    box-shadow: 0 2px 6px 2px rgba($green, 0.2);
    &:hover {
      background-color: $green-hover;
    }
    &.disabled {
      background-color: rgba($green, 0.4);
      box-shadow: none;
      cursor: not-allowed;
    }
  }
  &.outlined, &.blue {
    background-color: $white;
    border: 1px solid #D3DDE5;
    box-shadow: 0px 6px 10px rgba(34, 77, 97, 0.1);
    border-radius: 4px;
    color: ut-white;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    line-height: 2.25rem;
    letter-spacing: .2px;
    padding: 0 1.5rem;
    user-select: none;
    color: #0073FC;
    &:hover {
      background-color: #fafafa;
    }
    &:active {
      background-color: #D3DDE5;
    }
  }
}
.ds_toggle {
  background-color: $gray-med;
  border-radius: 1rem;
  cursor: pointer;
  margin: 0.4rem 0.2rem;
  padding: 0.15rem;
  width: 1.4rem;
  transition: background-color 0.2s ease-out;
  @include mobile {
    width: 1.6rem;
  }
  &.dark {
    background-color: #656565;
    .dot {
      background-color: $gray-med;
    }
  }
  &.toggled {
    .dot {
      transform: translateX(0.9rem) scale(2.3);
      @include mobile {
        transform: translateX(1.1rem) scale(2.3);
      }
    }
    &.blue {
      background-color: rgba($blue, 0.4);
      .dot {
        background-color: $blue;
      }
    }
    &.purple {
      background-color: rgba($purple, 0.4);
      .dot {
        background-color: $purple;
      }
    }
  }
  .dot {
    background-color: $white;
    border-radius: 50%;
    box-shadow: 0 1px 3px 1px rgba($gray-dk, 0.1),
      0 1px 2px 0 rgba($gray-dk, 0.25);
    height: 0.5rem;
    width: 0.5rem;
    transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    transform: scale(2.2);
    @include mobile {
      height: 0.6rem;
      width: 0.6rem;
    }
  }
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.ds_close_btn {
  background-color: $white;
  border-radius: 50%;
  box-shadow: 0 2px 6px 2px rgba($purple, 0.2);
  color: $purple;
  cursor: pointer;
  font-size: 1rem;
  line-height: 2rem;
  position: absolute;
  text-align: center;
  top: 0.4rem;
  width: 2rem;
  z-index: 20;
  &:hover {
    animation: 0.3s linear 0s 1 shake;
    @include mobile {
      animation: none;
    }
  }

  &.left {
    left: 0.4rem;
  }
  &.right {
    right: 0.4rem;
  }
  @include mobile {
    border-radius: 1.75rem;
    box-shadow: 0 2px 6px 2px rgba($purple, 0.2);
    font-size: 1.2rem;
    line-height: 2.5rem;
    margin: 0.25rem;
    width: 3.5rem;
  }
}
.ds_info_line {
  padding: 5rem 0 5rem;
  text-align: center;
  @include mobile {
    padding: 3rem 0;
  }
  &.white {
    background-color: $white;
  }
  .float_wrapper {
    display: inline-block;
    overflow: auto;
    text-align: center;
    .fa-info {
      background: linear-gradient(-60deg, $purple-dk, #3a66c4, $blue, $mint);
      border-radius: 50%;
      color: $white;
      float: left;
      font-size: 0.55rem;
      line-height: 1.2rem;
      text-align: center;
      width: 1.2rem;
      @include mobile {
        float: none;
        margin-bottom: 0.5rem;
      }
    }
    h4 {
      color: $text-secondary;
      float: left;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.2rem;
      margin: 0;
      text-indent: 0.5rem;
      strong {
        color: $text-primary;
        margin-right: 0.2rem;
        @include mobile {
          margin: 0;
        }
      }
      br {
        display: none;
        @include mobile {
          display: inline;
        }
      }
      @include mobile {
        float: none;
      }
    }
    .info_line_btn {
      background: -webkit-linear-gradient(160deg, $purple-dk, $blue);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border-bottom: 1px solid $gray-med;
      color: $purple;
      cursor: pointer;
      float: left;
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 1.2rem;
      margin-left: 0.5rem;
      @include mobile {
        float: none;
        display: inline-block;
        margin: 1rem 0 0;
      }
      &:hover {
        color: $purple-dk;
      }
      i {
        -webkit-text-fill-color: $purple;
        margin-left: 0.1rem;
      }
    }
  }
}
.page_header {
  padding: 8rem 0;
  position: relative;
  text-align: center;
  &.background {
    // background-image: url(./assets/images/overlay-grid.svg),
      // linear-gradient(-60deg, $purple-dk, #3a66c4, $blue, $mint);
    background-image: url(./assets/images/overlay-grid.svg),
      linear-gradient(0deg, $blue, $blue-dk, #003372);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &.portfolio {
      background-image: linear-gradient(-50deg, rgba($gray-dk, .6), rgba($gray-dk, 1)), url(./assets/images/office-windows.jpg);
    }
  }
  &.with_polygon {
    // padding: calc(50vh - 6rem) 0 calc(50vh - 2rem);
    padding: 10rem 0 12rem;
    .svg_wrapper {
      height: calc(3rem + 3vw);
      width: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
      svg {
        width: 100%;
        height: 100%;
        .white {
          fill: $white;
        }
        .light {
          fill: $gray-lt;
        }
        .med {
          fill: $gray-med;
        }
      }
    }
  }
  h1 {
    animation: 1.25s ease-out 0s 1 textSlideIn;
    color: $white;
    font-size: 3.5rem;
    font-weight: 300;
    margin: 0;
    position: relative;
    text-shadow: 0px 2px 5px rgba(34, 77, 97, 0.5);
  }
  h2 {
    animation: 1.25s ease-out 0s 1 textSlideIn;
    color: rgba($white, 0.7);
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0;
    position: relative;
    text-shadow: 0px 1px 3px rgba(34, 77, 97, 0.5);
  }
}
@keyframes textSlideIn {
  0% {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}
</style>
