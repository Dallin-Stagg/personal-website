<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
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
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// PERSONAL WEBSITE STYLES

.btn {
  background: linear-gradient(255deg,$mint,$blue);
  border-radius: 4px;
  box-shadow: 0 3px 15px 0 rgba(34,77,97,.4);
  color: $white;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 2.5rem;
  margin: .75rem 0;
  padding: 0 1rem;
  user-select: none;
  @include mobile {
    font-size: 1.3rem;
    line-height: 3.5rem;
  }
  &:hover {
    background: linear-gradient(rgba(0,0,0,.05), rgba(0,0,0,.05)), linear-gradient(255deg,$mint,$blue);
  }
  &:active {
    background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), linear-gradient(255deg,$mint,$blue);
  }
  &.invert {
    background-color: $white;
    background: none;
    border: 1px solid $gray-border;
    box-shadow: 0 3px 10px 0 rgba(34,77,97,.2);
    box-sizing: border-box;
    color: $gray-med;
    line-height: calc(2.5rem - 2px);
    &:hover {
      background-color: $gray-lt;
    }
    &:active {
      filter: brightness(95%);
    }
  }
}
.page_header {
  animation: 1.25s ease-out 0s 1 headerSlideIn;
  padding: 8rem 0;
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
