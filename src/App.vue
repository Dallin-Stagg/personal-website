<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    //
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
}
#app {
  font-family: "Quicksand", sans-serif, system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
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
  border-radius: 1.5rem;
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
  &:hover {
    transform: scale(1.02);
    &.disabled {
      transform: scale(1);
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
}
.ds_toggle {
  background-color: $gray-med;
  border-radius: 1rem;
  cursor: pointer;
  margin: 0.4rem 0.2rem;
  padding: 0.1rem;
  width: 1.4rem;
  transition: background-color 0.2s ease-out;
  &.toggled {
    .dot {
      transform: translateX(0.9rem) scale(2.1);
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
    box-shadow: 0 2px 4px 1px rgba($purple, 0.2);
    height: 0.5rem;
    width: 0.5rem;
    transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    transform: scale(2.1);
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
  margin: 1.5rem 0;
  text-align: center;
  @include mobile {
    margin: 3rem 0;
  }
  .float_wrapper {
    display: inline-block;
    overflow: auto;
    text-align: center;
    .fa-info {
      background-color: $purple;
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
      border-bottom: 1px solid $purple;
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
        margin-left: 0.1rem;
      }
    }
  }
}
.page_header {
  animation: 1.25s ease-out 0s 1 headerSlideIn;
  padding: 8rem 0;
  position: relative;
  text-align: center;
  &.background {
    background-image: url(./assets/images/overlay-grid.svg),
      linear-gradient(-15deg, rgba($purple-dk, 0.8), rgba($blue, 0.8));
    background-position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: -3rem;
    z-index: 1;
  }
  h1 {
    color: $white;
    font-size: 3.5rem;
    font-weight: 300;
    margin: 0;
    text-shadow: 0px 2px 5px rgba(34, 77, 97, 0.5);
  }
  h2 {
    color: rgba($white, 0.7);
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0;
    text-shadow: 0px 1px 3px rgba(34, 77, 97, 0.5);
  }
}
@keyframes headerSlideIn {
  0% {
    opacity: 0;
    bottom: 0.5rem;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
}
</style>
