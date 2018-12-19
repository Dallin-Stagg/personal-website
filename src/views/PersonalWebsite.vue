<template>
  <div id="my-website">
    <myNav></myNav>
    <contactMe v-if="showContact"></contactMe>
    <alert></alert>
    <div id="view" :class="{ 'menu_open': menuOpen }" @click="closeMenu()">
      <router-view/>
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
import MyNav from '../components/Nav.vue'
import ContactMe from '../components/Contact.vue'
import Alert from '../components/Alert.vue'
import MyFooter from '../components/Footer.vue'

export default {
  name: 'Website',
  components: {
    myNav: MyNav,
    contactMe: ContactMe,
    alert: Alert,
    myFooter: MyFooter
  },
  computed: {
    showContact() {
      return this.$store.state.showContact
    },
    menuOpen() {
      return this.$store.state.menuOpen
    },
    showAlert() {
      return this.$store.state.alertInfo.show
    },
    routeName() {
      return this.$route.name
    }
  },
  watch: {
    routeName() { // creates desired scroll behavior work around (scrolls to top on page change)
      var viewDiv = document.getElementById('view');
      viewDiv.scrollTop = 0;
    }
  },
  mounted() {
    if (this.$route.name === 'Personal Website') {
        this.$router.push({ name: 'Home' })
    }
  },
  methods: {
    closeMenu() {
      if (this.$store.state.menuOpen) {
        this.$store.commit('toggleMenu')
      }
    }
  }
}
</script>
<style lang="scss">
@import '../assets/styles/global-styles.scss';
/* eslint-disable */
#my-website {
  background-image: url('../assets/images/overlay-striped.svg'), linear-gradient(10deg, #6C5B7B, #355C7D);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  perspective: 1000px;
  width: 100%;
}
#view {
  background-color: $white;
  height: 100vh;
  overflow-y: scroll;
  transition: .25s ease-out transform;
  z-index: 2;
  will-change: transform;
  &.menu_open {
    transform: rotateY(-10deg) scale(.8) translateX(10rem);
    @include mobile {
      transform: rotateY(-40deg) scale(.7) translateX(20rem);
    }
  }
}

</style>
