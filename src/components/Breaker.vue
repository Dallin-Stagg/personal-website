<template>
  <div class="svg_breaker" :class="bgColor">
    <svg preserveAspectRatio="none" viewBox="0 0 100 100">
      <defs>
        <filter id="f4" x="0" y="0" width="150%" height="150%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="2"></feOffset>
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 .6 0"
          ></feColorMatrix>
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="3"></feGaussianBlur>
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
        </filter>
      </defs>
      <polygon filter="url(#f4)" :class="mainColor" points="0,0 50,90 100,0 0,0" opacity="1"></polygon>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Breaker",
  props: ["mainColor", 'bgColor'],
  data() {
    return {};
  },
  methods: {
    colorReversal(color) {
      if (color === "light") {
        return "white";
      } else if (color === "white") {
        return "light";
      }
      return "dark"
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/global-styles.scss";

.svg_breaker {
  height: calc(2rem + 3vw);
  width: 100%;
  &.light {
    background-color: var(--background-2);
  }
  &.white {
    background-color: var(--background-1);
  }
  &.dark {
    background-color: $gray-dk;
  }
  svg {
    width: 100%;
    height: 100%;
    .light {
      fill: var(--background-2);
    }
    .white {
      fill: var(--background-1);
    }
    .dark {
      fill: $gray-dk;
    }
  }
}
</style>
