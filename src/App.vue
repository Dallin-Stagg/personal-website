<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    //
  }
}
</script>
<style lang="scss">
/* eslint-disable */
@import './assets/styles/global-styles.scss';

body {
  margin: 0;
}
html {
  font-size: 16px;
}
#app {
  font-family: system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}
// vue transition tag stylings
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
// PERSONAL WEBSITE STYLES

.ds_btn {
	border-radius: 1.5rem;
	box-shadow: 0 3px 7px 0 rgba(24, 55, 69, 0.1);
	color: $white;
	cursor: pointer;
  display: inline-block;
	font-size: .8rem;
	font-weight: 600;
	letter-spacing: .5px;
	line-height: 2.3rem;
  padding: 0 1.5rem;
	text-align: center;
	text-transform: uppercase;
	margin: 1rem auto;
  transition: background-color .2s ease-out, transform .2s ease-out;
  &:hover {
    transform: scale(1.03);
  }
  &.green {
    background-color: $green;
    &:hover {
      background-color: $green-hover;
    }
    &.disabled {
      background-color: rgba($green, .4);
      box-shadow: none;
      cursor: not-allowed;
    }
  }
}
.ds_toggle {
  background-color: $gray-lt;
  border: 1.5px solid $gray-border;
  border-radius: 1rem;
  cursor: pointer;
  padding: .15rem;
  width: 2.5rem;
  .dot {
    background-color: $gray;
    border-radius: 50%;
    box-shadow:  0 1px 3px 0 rgba(24, 55, 69, 0.4);
    height: 1.3rem;
    width: 1.3rem;
    transition: transform .2s ease-out, background-color .2s ease-out;
    &.toggled {
      background-color: $green;
      transform: translateX(1.2rem);
    }
  }
}
.ds_close_btn {
  border-radius: 50%;
  color: rgba($gray-dk, .6);
  cursor: pointer;
  line-height: 1.8rem;
  position: absolute;
  text-align: center;
  top: .4rem;
  right: .4rem;
  width: 1.8rem;
  z-index: 20;
  transition: background-color .2s ease-out;
  &:hover {
    background-color: rgba($gray, .4);
  }
  @include mobile {
    background-color: rgba($gray, .3);
    border-radius: 1.75rem;
    box-shadow: inset 0 1px 3px 0 rgba(24, 55, 69, 0.25);
    font-size: 1.2rem;
    line-height: 2.5rem;
    margin: .25rem;
    width: 3.5rem;
  }
}
.page_header {
  animation: 1.25s ease-out 0s 1 headerSlideIn;
  padding: 5rem 0;
  position: relative;
  text-align: center;
  h1 {
    color: $white;
    font-size: 3.5rem;
    font-weight: 300;
    margin: 0;
    text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
  }
  h2 {
    color: rgba($white, .6);
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0;
    text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
  }
}
@keyframes headerSlideIn {
  0% {
    opacity: 0;
    bottom: .5rem;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
}
.breaker {
  background-image: linear-gradient(190deg,$gray,$blue-dk);
  border-radius: .15rem;
  height: .3rem;
  margin: .7rem 0;
  width: 6rem;
}
</style>
