<template>
  <div id="home">
    <div v-if="displayIntro">
      <div class="prelude"></div>
      <div class="logo"></div>
    </div>
    <div class="wrapper">
      <div class="page_header">
        <h2>Hey, I'm</h2>
        <h1 class="website_title">&#8203;{{ displayText }}</h1>
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      titles: ["A student", "A developer", "A musician", "Dallin Stagg"],
      displayedTitleLength: 0,
      typing: true,
      titleIndex: 0,
      //
      displayIntro: true
    };
  },
  computed: {
    displayText() {
      if (this.displayedTitleLength) {
        return this.titles[this.titleIndex].substring(
          0,
          this.displayedTitleLength
        );
      }
      return "";
    }
  },
  mounted() {
    setTimeout(this.terminatePrelude, 3900);
  },
  methods: {
    updateTitle() {
      if (
        this.typing &&
        this.displayedTitleLength < this.titles[this.titleIndex].length
      ) {
        this.displayedTitleLength += 1;
        if (this.titles[this.titleIndex][this.displayedTitleLength] === " ") {
          this.displayedTitleLength += 1;
        }
        setTimeout(this.updateTitle, 125);
      } else if (
        this.typing &&
        this.displayedTitleLength === this.titles[this.titleIndex].length
      ) {
        this.typing = false;
        setTimeout(this.updateTitle, 800);
      } else if (
        !this.typing &&
        this.displayedTitleLength > 0 &&
        this.titleIndex !== this.titles.length - 1
      ) {
        this.displayedTitleLength -= 1;
        if (this.titles[this.titleIndex][this.displayedTitleLength] === " ") {
          this.displayedTitleLength -= 1;
        }
        setTimeout(this.updateTitle, 170);
      } else if (!this.typing && !this.displayedTitleLength) {
        this.titleIndex += 1;
        this.typing = true;
        setTimeout(this.updateTitle, 800);
      }
    },
    terminatePrelude() {
      this.displayIntro = false;
      setTimeout(this.updateTitle, 200);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.prelude {
  animation: prelude_animation 4s linear 0s;
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 4;
}
@keyframes prelude_animation {
  0% {
    background-color: #282828;
    transform: translateY(0);
  }
  80% {
    background-color: #282828;
    transform: translateY(0);
  }
  95% {
    background-color: transparent;
    transform: translateY(-100%);
  }
  100% {
    background-color: transparent;
    transform: translateY(-100%);
  }
}

.logo {
  animation: logo_animation 4s linear 0s;
  background-image: url("../assets/images/logo-white.png");
  background-position: center;
  background-size: 50rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100vh;
  z-index: 5;
  @include mobile {
    background-size: 30rem;
  }
}
@keyframes logo_animation {
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  70% {
    opacity: 1;
    transform: translateY(0);
  }
  85% {
    opacity: 0.5;
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.wrapper {
  background-image: url("../assets/images/mountain-and-lake.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  .overlay {
    background-size: 50rem;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
}
.page_header {
  position: relative;
  user-select: none;
  z-index: 4;
}
.website_title {
  animation: blink 1s linear 0s infinite;
  border-right: 2px solid rgba($white, 0.8);
  display: inline;
  text-transform: uppercase;
  @include mobile {
    font-size: 3rem;
  }
}
@keyframes blink {
  40% {
    border-color: transparent;
  }
  50% {
    border-color: transparent;
  }
}
</style>
