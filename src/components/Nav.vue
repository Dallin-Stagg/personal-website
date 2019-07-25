<template>
  <div>
    <transition name="haze_slide">
      <div class="haze" v-if="menuOpen" @click="$store.commit('toggleMenu')"></div>
    </transition>
    <div class="my_navigation" :class="{ 'open': menuOpen }">
      <div class="nav_btn" @click="$store.commit('toggleMenu')">
        <i class="fa fa-bars"></i>
      </div>
      <transition name="nav_content_slide">
        <nav class="content" v-if="menuOpen">
          <div class="grad_breaker"></div>
          <div class="item_wrapper">
            <div
              class="item"
              v-for="(route, i) in routes"
              :key="i"
              @click="go(route.name)"
              :class="{ 'active': activeRoute === route.name }"
            >
              <i :class="route.icon"></i>
              {{ route.name }}
            </div>
          </div>
          <div class="center_child">
            <div class="text_wrapper">
              <p>Welcome to my website! I designed and created this website for people just like you! Whether you're a recruiter, colleague or are just interested in my work, feel free to look around and contact me with any questions!</p>
            </div>
          </div>
          <div class="contact_me_btn">Contact Me</div>
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routes: [
        { name: "Home", icon: "fas fa-home" },
        { name: "Resume", icon: "fa fa-file" },
        { name: "Portfolio", icon: "fas fa-layer-group" }
      ]
    };
  },
  computed: {
    activeRoute() {
      return this.$route.name;
    },
    menuOpen() {
      return this.$store.state.menuOpen;
    }
  },
  methods: {
    go(routeName) {
      this.toggleMenu();
      this.$router.push({ name: routeName });
    },
    openLink(link) {
      window.open(link);
    },
    toggleMenu() {
      if (this.menuOpen) {
        this.$store.commit("toggleMenu");
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/global-styles.scss";
.haze_slide-enter-active,
.haze_slide-leave-active {
  transition: opacity 0.3s;
}
.haze_slide-enter,
.haze_slide-leave-to {
  opacity: 0;
}


.nav_content_slide-enter-active,
.nav_content_slide-leave-active {
  transition: opacity 0.2s, transform 0.3s;
}
.nav_content_slide-enter,
.nav_content_slide-leave-to {
  opacity: 0;
  transform: translateY(-2rem);
}
.haze {
  background-color: rgba(#0c0c0c, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: -8rem;
  z-index: 5;
}
.my_navigation {
  background-color: $white;
  border-radius: 2rem;
  box-shadow: 0 2px 5px 1px rgba($gray-dk, 0.2);
  height: 3rem;
  width: 3rem;
  overflow: hidden;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 30;
  transition: border-radius ease 0.3s, height 0.4s ease, width 0.3s ease;
  @include mobile {
    height: 3.2rem;
    width: 3.2rem;
  }
  &.open {
    border-radius: 0.1rem;
    box-shadow: 0 2px 10px 0px rgba($gray-dk, 0.3),
      18px 0 0px -8px rgba($white, 0.3), 34px 0 0px -16px rgba($white, 0.2),
      50px 0 0px -24px rgba($white, 0.1);
    height: 31rem;
    width: 14rem;
    @include mobile {
      box-shadow: 0 2px 5px 0 rgba($gray-dk, 0.25),
        0 18px 0px -8px rgba($white, 0.3), 0 34px 0px -16px rgba($white, 0.2),
        0 50px 0px -24px rgba($white, 0.1);
      height: 31rem;
      width: calc(100% - 2rem);
    }
  }
}

.nav_btn {
  border-radius: 1.5rem;
  color: $text-secondary;
  cursor: pointer;
  font-size: 1rem;
  line-height: 3rem;
  position: relative;
  text-align: center;
  width: 3rem;
  z-index: 31;
  @include mobile {
    line-height: 3.2rem;
    width: 3.2rem;
  }
}

.content {
  border-top: 1px solid $gray;
  box-sizing: border-box;
  overflow-y: hidden;
  .grad_breaker {
    background-image: linear-gradient(
      -60deg,
      $purple-dk,
      #3a66c4,
      $blue
    );
    height: 4px;
    width: 100%;
  }
  .item_wrapper {
    padding: 1.5rem 0 1rem;
    position: relative;
    @include mobile {
      padding: 1rem 0 0;
    }
    .item {
      border-radius: 4px;
      box-sizing: border-box;
      color: $text-secondary;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 500;
      line-height: 2.4rem;
      margin: 0.2rem auto;
      padding-left: 1rem;
      user-select: none;
      width: calc(100% - 1rem);
      @include mobile {
        font-size: 1.1rem;
        line-height: 2.8rem;
        padding-left: 0;
        text-align: center;
      }
      i {
        padding-right: 0.5rem;
        transition: padding 0.2s ease-out;
      }
      &.active {
        background-image: linear-gradient(
          -60deg,
          $blue-dk,
          $blue
        );
        box-shadow: 0 2px 6px 2px rgba($gray-dk, 0.4);
        color: $white;
        text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
        i {
          padding-right: 0.8rem;
        }
      }
    }
  }
  .center_child {
    display: grid;
    align-items: center;
    justify-content: center;
    height: 12rem;
    @include mobile {
      height: 11rem;
    }
    .text_wrapper {
      background-color: $blue-disabled;
      border-radius: 4px;
      box-sizing: border-box;
      margin: 0 .5rem;
      padding: 1rem;
      width: calc(100% - 1rem);
      p {
        color: $text-primary;
        font-size: .825rem;
        font-weight: 500;
        margin: 0 auto;
        width: 11rem;
        @include mobile {
          font-size: .9rem;
          width: calc(100vw - 5rem);
        }
      }
    }
  }
  
  .contact_me_btn {
    border: 2px solid $blue;
    border-radius: 4px;
    box-sizing: border-box;
    color: $blue;
    cursor: pointer;
    font-size: .9rem;
    font-weight: 500;
    margin: 1.5rem .5rem 0;
    padding: .5rem;
    text-align: center;
    width: 13rem;
    transition: background-color .1s linear;
    &:hover {
      background-color: rgba($blue, .15);
    }
    @include mobile {
      font-size: 1rem;
      padding: .75rem 0;
      width: calc(100% - 1rem);
      &:hover {
        background-color: transparent;
      }
    } 
  }
}
</style>
