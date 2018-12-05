<template>
  <div class="portfolio">
    <div class="header_section">    
      <h1>Portfolio</h1>
      <h4>Check out my latest work</h4>
    </div>
    <div class="portfolio_body">
      <div class="item" v-for="(item, i) in items" :key="i">
        <div class="info">
          <h1>{{ item.title }}</h1>
          <div class="breaker"></div>
          <p>{{ item.description }}</p>
          <div class="btns">
            <div class="portfolio_btn solid">View Screenshots</div>
            <div class="portfolio_btn hollow">View Site</div>
          </div>
        </div>
        <div class="image_wrapper">
          <div class="image" :class="item.image_class"></div>
        </div>
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
            image_class: 'rc',
            title: 'Room Choice',
            description: 'During my time at Room Choice, I progressed from having a minimal coding background, to a mastery in several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and fundamental changes to the way we did business.'
					},
					{
            image_class: 'mil',
            title: 'Millenium Auto Network',
            description: 'After gaining valuable experience in the industry, I was hired as a temporary developer, directly in charge of optimizing the company website for mobile devices.'
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
  background: linear-gradient(45deg, $mint 15%, $blue-dk 85%);
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
  .portfolio_body {
    background-color: rgba($white, .9);
    border-radius: 4px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    padding: 2rem 0;
    width: 65rem;
    max-width: calc(100% - 8rem);
    @include mobile {
      width: calc(100% - 2rem);
      max-width: none;
      height: 50rem;
    }
    .item:not(:last-child) {
      border-bottom: 1px solid $gray-med;
    }
    .item {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      padding: 2rem 0;
      width: calc(100% - 5rem);
      @include mobile {
        display: none;
      }
      .info {
        box-sizing: border-box;
        padding: 0 1rem;
        h1 {
          color: $gray-dk;
          margin: 0;
        }
        .breaker {
          background-image: linear-gradient(255deg,$mint,$blue);
          border-radius: .15rem;
          height: .3rem;
          margin: .7rem 0;
          width: 6rem;
        }
        p {
          margin: 0;
        }
        .btns {
          margin-top: 1.5rem;
          .portfolio_btn {
            background-color: $white;
            border: 1px solid $gray-border;
            border-radius: 4px;
            cursor: pointer;
            display: inline-block;
            line-height: 3rem;
            margin-right: 1rem;
            padding: 0 1.3rem;
            transition: box-shadow .2s ease-out;
            &:hover {
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
            }
            &.solid {

            }
            &.hollow {

            }
          }
        }
      }
      .image_wrapper {
        border: 1px solid $gray-border;
        border-radius: 50%;
        box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        height: 18rem;
        margin: 0rem auto;
        padding: 1rem;
        width: 18rem;
        .image {
          background-color: $gray-lt;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100%;
          border-radius: 50%;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
          height: 100%;
          width: 100%;
          &.rc {
              background-image: url('../assets/images/room-choice-logo.png');
          }
          &.byu {
              background-image: url('../assets/images/byu-campus.jpg');
          }
          &.mil {
              background-image: url('../assets/images/millenium-logo.png');
          }
        }
      }
    }
  }
}

</style>
