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
  background-image: linear-gradient(255deg,$mint,$blue);
  border-radius: 4px;
  box-shadow: 0 3px 15px 0 rgba(34,77,97,.4);
  color: $white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  line-height: 2.5rem;
  margin: .75rem 0;
  padding: 0 1rem;
}
.ds_section_header {
  color: $gray-dk;
  font-size: 1.5rem;
  text-align: center;
}
</style>
