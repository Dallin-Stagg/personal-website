<template>
  <div class="home">
    <div class="header_section">
      <div class="text">
        <h4>Hey, I'm</h4>
        <h1>DALLIN STAGG</h1>
      </div>
      <div class="scroll_prompt">
        <h4>Learn what makes me tick</h4>
        <i class="fa fa-chevron-down"></i>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="about_me">
      <h2>About me.</h2>
      <p>I am currently a student at BYU studying Accounting and Computer Science. Throughout my studies and professional work experience I've found a passion for using my skillset to engage in analytical thinking to problem solve, project business insights, and communicating clearly with my team.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global-styles.scss';

.header_section {
  background-image: url('../assets/images/mountain-and-lake.jpg');
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
    animation: 1s ease-out 0s 1 headerSlideIn;
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
  @keyframes headerSlideIn {
    0% {
      opacity: 0;
      bottom: 1rem;
    }
    100% {
      opacity: 1;
      bottom: 0;
    }
  }
  .scroll_prompt {
    animation: .5s ease-out 0s 1 scrollSlideIn;
    color: $white;
    position: absolute;
    text-align: center;
    z-index: 3;
    bottom: 2rem;
    left: 0;
    width: 100%;
    h4 {
      font-size: 1.1rem;
      font-weight: 500;
      margin: .3rem 0;
    }
  }
  @keyframes scrollSlideIn {
    0% {
      bottom: 0rem;
      opacity: 0;
    }
    100% {
      bottom: 2rem;
      opacity: 1;
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
.about_me {
  padding: 3rem 0 5rem;
  h2 {
    color: $gray-dk;
    font-size: 1.5rem;
    text-align: center;
  }
  p {
    color: $gray-dk;
    font-size: 1rem;
    margin: 0 auto;
    width: 45rem;
    @include mobile {
      width: calc(100% - 2rem);
    }
  }
}
</style>
