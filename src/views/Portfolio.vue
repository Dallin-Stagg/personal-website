<template>
  <div class="portfolio">
    <div class="header_section">    
      <h1>Portfolio</h1>
      <h4>Check out my latest work</h4>
    </div>
    <div class="white_box desktop">
      <div class="item" v-for="(item, i) in items" :key="i">
        <div class="info_section">
          <h1>{{ item.title }} <span v-if="item.subtitle">{{ item.subtitle }}</span></h1>
          <div class="breaker"></div>
          <p>{{ item.description }}</p>
          <div class="btns">
            <div class="btn">View Screenshots</div>
            <div class="btn invert">View Site</div>
          </div>
        </div>
        <div class="image" :class="item.image_class"></div>
      </div>
    </div>
    <div class="white_box mobile" v-for="(item, i) in items" :key="i">
      <div class="image" :class="item.image_class"></div>
      <div class="info_section">
        <h1>{{ item.title }} <span v-if="item.subtitle">{{ item.subtitle }}</span></h1>
        <div class="breaker"></div>
        <p>{{ item.description }}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
      return {
        items: [
          {
            image_class: 'rc_com',
            title: 'Room Choice',
            subtitle: '- Company Website',
            description: 'During my time at Room Choice, I progressed from having a minimal coding background, to a mastery in several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and fundamental changes to the way we did business.',
            link: 'roomchoice.com'
          },
          {
            image_class: 'rc_manager',
            title: 'Room Choice',
            subtitle: '- Manager Portal',
            description: 'During my time at Room Choice, I progressed from having a minimal coding background, to a mastery in several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and fundamental changes to the way we did business.',
            link: ''
          },
          {
            image_class: 'mil',
            title: 'Millenium Auto Network',
            description: 'After gaining valuable experience in the industry, I was hired by Millenium Auto Network as a temporary software developer, directly in charge of optimizing the company website for mobile devices and refining the overall look and feel of the website.',
            link: 'milleniumauto.net'
					},
          {
            image_class: 'rc_student',
            title: 'Room Choice',
            subtitle: '- Student Portal',
            description: 'The Room Choice student portal is the gateway to leasing student housing apartments the way it was always intended. The software allows tenants to sign up, pick beds, fill out applications, sign contracts, make payments and engage in social media functionality to get to know other tenants at their complex all from the device of their choice.',
            link: 'fairview.roomchoice.com'
					}
        ]
      }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global-styles.scss';

.portfolio {
  // background: linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
  // background: linear-gradient(45deg, $mint 15%, $blue-dk 85%);
  // background: radial-gradient(circle at 100% 0, $blue-dk 15%, $mint 85%);
  background: linear-gradient(45deg, rgba($mint, .7) 15%, rgba($blue-dk, .7) 85%),url('../assets/images/material-blue.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem 0 5rem;
  .header_section {
    padding: 8rem 0;
    text-align: center;
    h1 {
      color: $white;
      font-size: 3.5rem;
      font-weight: 300;
      margin: 0;
      text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
    }
    h4 {
      color: rgba($white, .6);
      font-size: 1.4rem;
      font-weight: 300;
      margin: 0;
      text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
    }
  }
  .breaker {
    background-image: linear-gradient(190deg,$gray,$blue-dk);
    border-radius: .15rem;
    height: .3rem;
    margin: .7rem 0;
    width: 6rem;
  }
  .info_section {
    box-sizing: border-box;
    padding: 0 1rem;
    h1 {
      color: $gray-dk;
      font-size: 1.5rem;
      margin: 0;
    }
    p {
      font-size: .95rem;
      margin: 0;
    }
    .btns {
      margin-top: 1.5rem;
    }
  }
  .white_box {
    background-color: $white;
    border-radius: 4px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    padding: 2rem 0;
    width: 65rem;
    max-width: calc(100% - 8rem);
    @include mobile {
      max-width: calc(100% - 2.5rem);
    }
    &.desktop {
      @include mobile {
        display: none;
      }
    }
    &.mobile {
      display: none;
      @include mobile {
        display: block;
      }
      margin-bottom: 1rem;
    }
    .item:not(:last-child) {
      border-bottom: 1px solid $gray;
    }
    .item {
      display: grid;
      grid-template-columns: 2fr 3fr;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      padding: 2rem 0;
      width: calc(100% - 5rem);
    }
  }
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    height: 25rem;
    margin: 0rem auto;
    width: 100%;
    &.rc_com {
      background-image: url('../assets/images/millenium-mobile.png');
    }
    &.rc_manager {
      background-image: url('../assets/images/millenium-mobile.png');
    }
    &.rc_student {
      background-image: url('../assets/images/millenium-mobile.png');
    }
    &.mil {
      background-image: url('../assets/images/millenium-mobile.png');
    }
  }
}

</style>
