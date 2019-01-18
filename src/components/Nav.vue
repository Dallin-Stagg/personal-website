<template>
  <div class="my-navigation">
    <div class="nav_btn" @click="$store.commit('toggleMenu')">
      <i class="fa fa-bars"></i>
    </div>
    <div class="sidebar_wrapper">
      <nav class="sidebar">
        <div class="personal_logo"></div>
        <div class="item_wrapper">
          <div
            class="item"
            v-for="(route, i) in routes"
            :key="i"
            @click="go(route)"
            :class="{ 'active': activeRoute === route }"
          >{{ route }}</div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routes: ["Home", "Resume", "Portfolio", "Contact"]
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

.nav_btn {
  background-color: $white;
  border-radius: 50%;
  box-shadow: 0 2px 4px 1px rgba($gray-dk, 0.2);
  color: $purple;
  cursor: pointer;
  font-size: 1rem;
  line-height: 3rem;
  margin: 1rem 0;
  text-align: center;
  width: 3rem;
  position: fixed;
  top: 0;
  left: 1rem;
  z-index: 30;
  @include mobile {
    line-height: 3.2rem;
    width: 3.2rem;
  }
}
.sidebar_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 1rem;
  top: 0;
  height: 100vh;
  .sidebar {
    background-color: $white;
    box-shadow: 0 1px 6px 0px rgba($gray-dk, 0.25),
      18px 0 0px -8px rgba($white, 0.3), 34px 0 0px -16px rgba($white, 0.2),
      50px 0 0px -24px rgba($white, 0.1);
    box-sizing: border-box;
    overflow-y: auto;
    padding: 1rem 0;
    .personal_logo {
      background-image: url("../assets/images/logo-black.png");
      background-size: 190%;
      background-repeat: no-repeat;
      background-position: center;
      height: 7rem;
      margin: 0.5rem auto;
      opacity: 0.7;
      width: 11rem;
    }
    .item_wrapper {
      padding-bottom: 2rem;
      position: relative;
      .item {
        color: $text-secondary;
        cursor: pointer;
        font-size: 0.95rem;
        font-weight: 500;
        line-height: 2.4rem;
        margin: 0.2rem auto;
        text-align: center;
        width: 100%;
        @include mobile {
          font-size: 1rem;
          line-height: 2.5rem;
        }
        &.active {
          background-image: linear-gradient(
            -15deg,
            rgba($purple-dk, 0.8),
            rgba($blue, 0.8)
          );
          box-shadow: 0 2px 6px 2px rgba($purple, 0.2);
          color: $white;
          text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
        }
      }
    }
    .icon_wrapper {
      display: inline-block;
      margin: 0 2.5rem;
      overflow: auto;
      .icon_item {
        border-radius: 3rem;
        box-shadow: 0 2px 6px 2px rgba($purple, 0.2);
        color: $purple;
        cursor: pointer;
        float: left;
        line-height: 2.5rem;
        margin: 0.5rem 0.25rem;
        position: relative;
        text-align: center;
        width: 2.5rem;
        @include mobile {
          font-size: 1.1rem;
          line-height: 3rem;
          width: 3rem;
        }
      }
    }
  }
}
</style>
