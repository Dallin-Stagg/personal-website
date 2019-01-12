<template>
  <div id="home">
    <div class="header_section">
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
      titleIndex: 0
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
    setTimeout(this.updateTitle, 400);
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";

.header_section {
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
  z-index: 4;
}
.website_title {
  animation: blink 1s linear 0s infinite;
  border-right: 2px solid rgba($white, 0.8);
  display: inline;
  text-transform: uppercase;
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
