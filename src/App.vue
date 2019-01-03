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
  font-family: 'Quicksand', sans-serif, system-ui;
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
    transform: scale(1.02);
    &.disabled {
      transform: scale(1);
    }
  }
  &.green {
    background-color: $green;
    box-shadow: 0 2px 4px 2px rgba($green, 0.25);
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
  background-color: $gray-med;
  border-radius: 1rem;
  cursor: pointer;
  margin: .4rem .2rem;
  padding: .1rem;
  width: 1.4rem;
  transition: background-color .2s ease-out;
  &.toggled {
    .dot {
      transform: translateX(.9rem) scale(2.1);
    }
    &.blue {
      background-color: rgba($blue, .4);
      .dot {
        background-color: $blue;
      }
    }
    &.purple {
      background-color: rgba($purple, .4);
      .dot {
        background-color: $purple;
      }
    }
  }
  .dot {
    background-color: $white;
    border-radius: 50%;
    box-shadow:  0 2px 4px 1px rgba($purple, 0.2);
    height: .5rem;
    width: .5rem;
    transition: transform .2s ease-out, background-color .2s ease-out;
    transform: scale(2.1);
  }
}
@keyframes shake {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-20deg); }
    100% { transform: rotate(0deg); }
  }
.ds_close_btn {
  background-color: $white;
  border-radius: 50%;
  box-shadow: 0 2px 4px 2px rgba($purple, 0.2);
  color: $purple;
  cursor: pointer;
  line-height: 1.8rem;
  position: absolute;
  text-align: center;
  top: .4rem;
  width: 1.8rem;
  z-index: 20;
  transition: background-color .2s ease-out;
  &:hover {
    animation: 0.3s linear 0s 1 shake;
  }
  
  &.left {
    left: .4rem;
  }
  &.right {
    right: .4rem;
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
</style>
