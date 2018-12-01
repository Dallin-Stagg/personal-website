<template>
  <div id="my-website">
    <myNav></myNav>
    <div class="view">
      <router-view/>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import MyNav from '../components/Nav.vue'
import MyFooter from '../components/Footer.vue'

export default {
  name: 'app',
  components: {
    myNav: MyNav,
    myFooter: MyFooter
  },
  mounted() {
      if (this.$route.name === 'Personal Website') {
          this.$router.push({ name: 'Home' })
      }
  }
}
</script>
<style lang="scss">
/* eslint-disable */

</style>
