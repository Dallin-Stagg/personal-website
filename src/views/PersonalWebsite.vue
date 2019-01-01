<template>
  <div id="my-website">
    <myNav></myNav>
    <transition name="fade">
      <contactMe v-if="showContact"></contactMe>
    </transition>
    <transition name="alert_slide">
      <alert v-if="showAlert"></alert>
    </transition>
    
    <div id="view" :class="{ 'menu_open': menuOpen }" @click="closeMenu()">
      <router-view/>
      <!--<myFooter></myFooter>-->
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
  data() {
    return {
      scrollPosition: null
    }
  },
  computed: {
    showContact() {
      return this.$store.state.showContact
    },
    showAlert() {
      return this.$store.state.alertInfo.show
    },
    menuOpen() {
      return this.$store.state.menuOpen
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
    window.addEventListener('scroll', this.distanceFromTop)
    if (this.$route.name === 'Personal Website') {
      this.$router.push({ name: 'Home' })
    }
  },
  methods: {
    closeMenu() {
      if (this.$store.state.menuOpen) {
        this.$store.commit('toggleMenu')
      }
    },
    distanceFromTop() {
      this.scrollPosition = window.scrollY
      // console.log(this.scrollPosition)
    }
  }
}
</script>
<style lang="scss">
@import '../assets/styles/global-styles.scss';
/* eslint-disable */
.alert_slide-enter-active, .alert_slide-leave-active {
  transition: opacity .5s, transform .5s;
}
.alert_slide-enter, .alert_slide-leave-to {
  opacity: 0;
  transform: translateX(30rem);
}

#my-website {
  width: 100%;
  @include mobile {
    // perspective: 1000px;
  }
}
#view {
  background-color: transparent;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.4);
  overflow-x: hidden;
  margin: 0 0 0 11rem;
  width: calc(100% - 11rem);
  @include mobile {
    will-change: transform;
    // transform: translateX(11rem);
    transition: .25s ease-out transform;
    &.menu_open {
      transform: rotateY(-25deg) scale(.7) translateX(16rem);
    }
  }
}
</style>
