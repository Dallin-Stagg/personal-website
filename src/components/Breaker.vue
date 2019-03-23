<template>
  <div class="svg_breaker" :class="colorReversal(passedColor)">
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
      <polygon filter="url(#f4)" :class="passedColor" points="0,0 50,90 100,0 0,0" opacity="1"></polygon>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Breaker",
  props: ["passedColor"],
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
    background-color: $gray-lt;
  }
  &.white {
    background-color: $white;
  }
  svg {
    width: 100%;
    height: 100%;
    .light {
      fill: $gray-lt;
    }
    .white {
      fill: $white;
    }
  }
}
</style>
