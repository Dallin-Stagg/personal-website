<template>
  <div id="home">
    <div class="header_section">
      <div class="page_header">
        <h2>Hey, I'm</h2>
        <h1>DALLIN STAGG</h1>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="about_me">
      <p>I am currently a student at BYU studying Accounting and Computer Science. Throughout my studies and professional work experience I've found a passion for using my skillset to engage in data-driven thinking to solve problems, project business insights, and clear communication with my team.</p>
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
  z-index: 2;
  .overlay {
    background-color: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
}
.about_me {
  padding: 4rem 0;
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
