<template>
  <div class="experience">
    <div class="header_section">
      <div class="text">
        <h4>Hey, I'm</h4>
        <h1>DALLIN STAGG</h1>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="detail_section">
      <div class="ds_item" v-for="(item, i) in items" :key="i">
          <div class="item_image" :class="item.image_class"></div>
          <div class="information">
              <h3>{{ item.title }}</h3>
              <h4>{{ item.position_and_time }}</h4>
              <h5>{{ item.area }}</h5>
              <p>{{ item.description }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
      return {
				items: [
						{
							image_class: 'byu',
							title: 'Brigham Young University',
							position_and_time: 'Accounting, August 2017 -',
							area: 'Provo, UT',
							description: 'BYU IS THE SHIZ'
					},
					{
							image_class: 'mil',
							title: 'Millenium Auto Network',
							position_and_time: 'Software Developer, October 2017 - November 2017',
							area: 'Provo, UT',
							description: 'After gaining valuable experience in the industry, I was hired as a temporary developer, directly in charge of optimizing the company website for mobile devices.'
					},
					{
							image_class: 'rc',
							title: 'Room Choice',
							position_and_time: 'Software Developer, March 2017 - November 2018',
							area: 'Provo, UT',
							description: 'During my time at Room Choice, I progressed from having a minimal coding background, to a mastery in several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and fundamental changes to the way we did business.'
					}
        ]
      }
  },
  mounted() {
      this.items.reverse()
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global-styles.scss';

.header_section {
  background-image: url('../assets/images/desk-shot.jpg');
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
.detail_section {
  padding: 4rem 0;
  .ds_item {
    width: 54rem;
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: start;
    justify-content: center;
    @include mobile {
        border: 1px solid $gray-border;
        border-radius: .5rem;
        box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.2);
        box-sizing: border-box;
        display: block;
        padding: 1rem;
        width: calc(100% - 3rem);
    }
    .item_image {
        box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.25);
        border-radius: 1rem;
        height: 14rem;
        width: 15rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        @include mobile {
            border-radius: .5rem;
            box-shadow: 0 3px 8px 0 rgba(24, 55, 69, 0.25);
            margin: .5rem auto 1.5rem;
            width: calc(100% - 1rem);
        }
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
    .information {
        h3 {
            color: $gray-dk;
            font-size: 1.5rem;
            margin: 1rem 0 .3rem;
            @include mobile {
                font-size: 1.6rem;
                margin-bottom: .5rem;
            }
        }
        h4 {
            color: $green;
            font-size: 1rem;
            font-weight: 500;
            margin: 0;
            @include mobile {
                font-size: 1.1rem;
            }
        }
        h5 {
            color: $blue;
            font-size: .95rem;
            font-weight: 500;
            margin: 0;
            @include mobile {
                font-size: 1.1rem;
            }
        }
        p {
            color: $gray-med;
            font-size: .95rem;
            margin: .5rem 0;
            @include mobile {
                font-size: 1.1rem;
            }
        }
    }
  }
}
</style>
