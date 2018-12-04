<template>
  <div class="experience">
    <div class="header_section">
      <div class="text">
        <h4>Hey, I'm</h4>
        <h1>DALLIN STAGGs</h1>
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
      }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global-styles.scss';

.header_section {
  background-image: url('../assets/images/close-up-code.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  .text {
    color: $white;
    position: relative;
    z-index: 3;
    text-align: center;
    h4 {
      font-size: 2rem;
      font-style: italic;
      font-weight: 500;
      margin: 0;
      text-shadow: 0px 2px 6px rgba(34, 77, 97, 0.8);
    }
    h1 {
      font-size: 4.3rem;
      margin: 0;
      text-shadow: 0px 2px 6px rgba(34, 77, 97, 0.8);
    }
  }
  .overlay {
    background-color: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}
</style>
