<template>
  <div>
    <div id="desktop-navbar" :class="{ 'show_background': scroll > desktopScrollPoint }">
      <div class="logo"></div>
      <span @click="goTo('contact')">Contact</span>
      <span @click="goTo('about')">About</span>
      <span @click="goTo('portfolio')">Portfolio</span>
    </div>
    <div id="mobile-navbar" :class="{ 'show_background': scroll > mobileScrollPoint }">
      <i class="toggle fa fa-bars" @click="showDropdown = !showDropdown"></i>
      <div class="dropdown" :class="{ 'show_dropdown': showDropdown }">
        <h1 class="watermark">Dallin</h1>
        <div class="links">
          <div class="ds_btn" @click="goTo('portfolio')">
            <div>Portfolio</div>
            <i class="fa fa-eye"></i>
          </div>
          <div class="ds_btn" @click="goTo('about')">
            <div>About</div>
            <i class="fa fa-eye"></i>
          </div>
          <div class="ds_btn" @click="goTo('contact')">
            <div>Contact</div>
            <i class="fa fa-pen"></i>
          </div>
        </div>
        <!--<div class="dots">
          <div class="dot" @click="goTo('contact')">
            <i class="fa fa-tint"></i>
          </div>
          <div class="dot">
            <i class="fa fa-braille"></i>
          </div>
        </div>-->
      </div>
      <div class="logo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      showDropdown: false,
      desktopScrollPoint: 400,
      mobileScrollPoint: -1
    };
  },
  props: ['scroll'],
  computed: {
    
  },
  methods: {
    goTo(where) {
      this.showDropdown = false
      if(where === 'contact') {
        this.$emit('goToContact')
      } else if (where === 'portfolio') {
        this.$emit('goToPortfolio')
      } else if (where === 'about') {
        this.$emit('goToAbout')
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
  

#desktop-navbar {
  position: fixed;
  top: 0;
  right: 0;
  height: 4rem;
  padding: 0 4rem;
  left: 0;
  z-index: 10;
  @include mobile {
    display: none;
  }
  &.show_background {
    background-color: var(--bg-4);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    /* --background-1: #272728;
    --background-2: #212123 */
  }
  .logo {
    background-image: url(../assets/images/mini-logo-white.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    float: left;
    margin: .4rem;
    height: 3.2rem;
    width: 3.2rem;
  }
  span {
    border-radius: 4px;
    color: white;
    cursor: pointer;
    float: right;
    line-height: 2.5rem;
    margin: .75rem 0;
    padding: 0 1rem;
    transition: background-color .15s;
    &:hover {
      background-color: rgba(255,255,255,.1);
    }
  }
}
#mobile-navbar {
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 4rem;
  padding: 0 0rem;
  left: 0;
  z-index: 10;
  display: none;
  @include mobile {
    display: block;
  }
  &.show_background {
    background-color: var(--bg-4);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    /* --background-1: #272728;
    --background-2: #212123 */
  }
  .toggle {
    color: $white;
    position: absolute;
    top: 0rem;
    left: 0;
    font-size: 1.6rem;
    color: $white;
    line-height: 4rem;
    width: 4rem;
    text-align: center;
    z-index: 2;
  }
  .dropdown {
    background-image: linear-gradient(
          -60deg,
          var(--bg-4),
          var(--bg-5));
    clip-path: circle(0rem at 0rem 0rem);
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    transition: clip-path .5s ease-in-out;
    z-index: 1;
    &.show_dropdown {
      clip-path: circle(48rem at 0rem 0rem);
    }
    .watermark {
      color: rgba(#B2B2B2, .02);
      font-size: 24rem;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%) rotate(-60deg);
    }
    .links {
      margin: 7rem 4rem;
      position: relative;
      text-align: left;
      z-index: 2;
    }
    .dots {
      margin: 2rem 4rem;
      .dot {
        background-color: rgba(white, .1);
        border-radius: 50%;
        color: $white;
        font-size: 1.4rem;
        line-height: 4rem;
        margin: 1.5rem 0;
        position: relative;
        height: 4rem;
        width: 4rem;
        z-index: 2;
      }
    }
  }
  .logo {
    background-image: url(../assets/images/mini-logo-white.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    display: inline-block;
    float: right;
    margin: .5rem .1rem .3rem;
    height: 3.2rem;
    width: 3.2rem;
  }
}
</style>
