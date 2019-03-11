<template>
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
        <div class="icon_wrapper">
          <div class="icon_item" @click="openLink('https://www.linkedin.com/in/dallin-stagg')">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="icon_item" @click="openLink('https://github.com/Dallin-Stagg')">
            <i class="fab fa-github"></i>
          </div>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routes: [
        { name: "Home", icon: "fas fa-home" },
        { name: "Portfolio", icon: "fas fa-layer-group" },
        { name: "Resume", icon: "fa fa-file" },
        { name: "Contact", icon: "fab fa-telegram-plane" }
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

.nav_content_slide-enter-active,
.nav_content_slide-leave-active {
  transition: opacity 0.2s, transform 0.3s;
}
.nav_content_slide-enter,
.nav_content_slide-leave-to {
  opacity: 0;
  transform: translateY(-2rem);
}

.my_navigation {
  background-color: $white;
  border-radius: 2rem;
  box-shadow: 0 2px 10px 0px rgba($gray-dk, 0.3);
  height: 3rem;
  width: 3rem;
  overflow: hidden;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 30;
  transition: border-radius linear 0.2s, height 0.25s linear, width 0.2s linear,
    box-shadow 0.2s linear;
  @include mobile {
    height: 3.2rem;
    width: 3.2rem;
  }
  &.open {
    border-radius: 0.1rem;
    box-shadow: 0 2px 10px 0px rgba($gray-dk, 0.3),
      18px 0 0px -8px rgba($white, 0.3), 34px 0 0px -16px rgba($white, 0.2),
      50px 0 0px -24px rgba($white, 0.1);
    height: calc(100vh - 17rem);
    width: 14rem;
    @include mobile {
      box-shadow: 0 2px 5px 0 rgba($gray-dk, 0.25),
        0 18px 0px -8px rgba($white, 0.3), 0 34px 0px -16px rgba($white, 0.2),
        0 50px 0px -24px rgba($white, 0.1);
      height: 17rem;
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
      $blue,
      $mint
    );
    height: 4px;
    width: 100%;
  }
  .item_wrapper {
    padding: 1.5rem 0;
    position: relative;
    @include mobile {
      padding: 0.7rem 0 0;
    }
    .item {
      box-sizing: border-box;
      color: $text-secondary;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 500;
      line-height: 2.4rem;
      margin: 0.2rem auto;
      padding-left: 1rem;
      user-select: none;
      width: 100%;
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
          $purple-dk,
          #3a66c4,
          $blue,
          $mint
        );
        box-shadow: 0 2px 6px 2px rgba($gray-dk, 0.2);
        color: $white;
        text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
        i {
          padding-right: 0.8rem;
        }
      }
    }
  }
  .icon_wrapper {
    @include mobile {
      display: none;
    }
    display: inline-block;
    margin: 1rem 1rem;
    overflow: hidden;
    .icon_item {
      border-radius: 3rem;
      box-shadow: 0 2px 6px 2px rgba($gray-dk, 0.2);
      color: $text-secondary;
      cursor: pointer;
      line-height: 2.5rem;
      margin: 0.5rem 0.25rem;
      position: relative;
      text-align: center;
      width: 2.5rem;
      @include mobile {
        background-image: linear-gradient(
          -60deg,
          $purple-dk,
          #3a66c4,
          $blue,
          $mint
        );
        color: $white;
        text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
        font-size: 1.1rem;
        line-height: 3rem;
        width: 3rem;
      }
      &:hover {
        background-image: linear-gradient(
          -60deg,
          $purple-dk,
          #3a66c4,
          $blue,
          $mint
        );
        color: $white;
        text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
      }
    }
  }
}
</style>
