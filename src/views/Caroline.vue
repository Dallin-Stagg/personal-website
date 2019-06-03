<template>
  <div class="caroline">
    <h1>Caroline is cool</h1>
    <div class="caroline_img"></div>
    <p>Caroline is one of the coolest people I have ever met. That means that she's pretty darn cool, if you didn't catch that. <br><br> For more information or to hit her up, contact her at 420-666-6969</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.caroline {
  background-color: #f9f9f9;
  padding: 1rem 0;
  h1 {
    box-sizing: border-box;
    color: gray;
    font-style: italic;
    font-weight: 400;
    margin: 0;
    padding: 5rem 0 1rem;
    text-align: center;
  }
  .caroline_img {
    background-image: url(../assets/images/caroline.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 6px 25px rgba(34, 77, 97, 0.3);
    height: 30vw;
    margin: 1rem auto;
    padding: 1rem 0 4rem;
    width: 30vw;
    @include mobile {
      height: 70vw;
      width: calc(100% - 3rem);
    }
  }
  p {
    color: gray;
    font-size: .9rem;
    margin: 1rem auto 10rem;
    width: 30vw;
    @include mobile {
      width: calc(100% - 3rem);
    }
  }
}


</style>
