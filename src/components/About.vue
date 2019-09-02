<template>
  <div class="about_section">
    <div class="text_wrapper">
      <h2 class="ds_section_header">
        <span>About me.</span>
      </h2>
      <p v-for="p in aboutMeParagraphs">{{ p }}</p>
      <div class="ds_info_line">
        <div class="float_wrapper">
          <i class="fa fa-info"></i>
          <h4>Have any questions for me?<br> Go ahead and <span @click="$emit('goToContact')">contact me</span></h4>
        </div>
      </div>
    </div>
    <!--<breaker mainColor="light" bgColor="dark"></breaker>-->
    <div class="tiles_wrapper">
      <div class="triangle left"></div>
      <div class="triangle right"></div>
      <div class="tiles">
        <div class="item" :class="{ 'active': activeTileIndex === 0 }"><i class="fas fa-book"></i>
          <div class="text_wrapper">
            <h4>Accounting</h4>
            <p>Learning to analyze a business, making decisions based on real value, and gaining an appreciation for a meticulous attention to detail are skills that have transformed the way I operate!</p>
          </div>
        </div>
        <div class="item" :class="{ 'active': activeTileIndex === 1 }"><i class="fas fa-code"></i>
          <div class="text_wrapper">
            <h4>Development</h4>
            <p>I once decided my business skillset needed a taste of tech. I then taught myself to code and began to design and develop sites just like this one from the ground up! Ask me about my work!</p>
          </div>
        </div>
        <div class="item" :class="{ 'active': activeTileIndex === 2 }"><i class="fas fa-paint-brush"></i>
          <div class="text_wrapper">
            <h4>Design</h4>
            <p>Everyone needs a way to express themselves artistically. Being able to design something my own way from scratch gives me the opportunity to be proud of something that only I touched.</p>
          </div>
        </div>
        <div class="item" :class="{ 'active': activeTileIndex === 3 }"><i class="fas fa-music"></i>
          <div class="text_wrapper">
            <h4>Music</h4>
            <p>From being honored as the All-State drummer for the state of Utah to performing with Grammy Award winning musicians internationally, music has always been a big part of who I am.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breaker from "../components/Breaker.vue";
export default {
  name: "About",
  components: {
    breaker: Breaker
  },
  data() {
    return {
      aboutMeParagraphs: [
        "Hey, my name is Dallin Stagg! I live in the beautiful state of Utah where I am currently studying Accounting at the Marriott School of Business.",
        "From a young age, I was fascinated by the world around me and how quickly technology has developed. Since I was 19 years old, I've been working in web development where I've been able to design and build powerful entreprise software systems. I've loved to see how companies adapt and innovate as they play their part in pushing technology forward. I've coupled my technical skillset with a love of business and entrepreneurship, and it is my hope to use the skills and lessons I've learned to continue to make the world we live in a better place.",
        "Aside from that I love playing basketball and soccer, performing on drum set, spending time outdoors, experiencing new things, and making new friends. Thanks for stopping by."
      ],
      activeTileIndex: 0
    };
  },
  mounted() {
    setTimeout(this.switchTile, 10000)
  },
  methods: {
    switchTile() {
      if (this.activeTileIndex === 3) {
        this.activeTileIndex = 0
      } else {
        this.activeTileIndex += 1
      }
      setTimeout(this.switchTile, 10000)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.about_section {
  background-color: $white;
  .text_wrapper {
    color: $text-primary;
    font-weight: 400;
    margin: 0 auto;
    padding: 7rem 0 5rem;
    width: 37rem;
    text-align: justify;
    text-justify: inter-word;
    @include mobile {
      padding: 5rem 0 4rem;
      width: calc(100% - 4rem);
    }
  }
  .tiles_wrapper {
    background-color: $gray-lt;
    border-top: 1px solid $gray-border;
    border-bottom: 1px solid $gray-border;
    box-shadow: inset 0 1px 2px 0 rgba(#111, 0.1);
    padding: 7rem 0 8.5rem;
    position: relative;
    .triangle {
      filter: drop-shadow(0px 1px 1px rgba(0,0,0,.1));
      width: 0;
      height: 0;
      position: absolute;
      z-index: 1;
      &.left {
        border-bottom: 1.2rem solid transparent;
        border-right: 1.2rem solid transparent;
        border-top: 1.2rem solid $white;
        border-left: 1.2rem solid $white;
        position: absolute;
        top: 8px;
        left: 8px;
      }
      &.right {
        border-bottom: 1.2rem solid $white;
        border-right: 1.2rem solid $white;
        border-top: 1.2rem solid transparent;
        border-left: 1.2rem solid transparent;
        top: none;
        left: none;
        bottom: 8px;
        right: 8px;
      }
    }
    .tiles {
      margin: 0 auto;
      position: relative;
      // transform: rotate(-35deg) skew(20deg,5deg);
      transform: rotate(-1deg) skew(0deg,3deg);
      width: calc(21rem + 3.5rem);
      @include mobile {
        width: calc(100% - 6rem);
      }
      .item {
        background: linear-gradient(-60deg, $blue-dk, $blue, $blue-disabled);
        color: $white;
        cursor: pointer;
        filter: brightness(.7);
        text-align: center;
        height: 3.5rem;
        width: 3.5rem;
        line-height: 3.5rem;
        position: relative;
        display: block;
        text-decoration: none;
        box-shadow: -1rem 1rem 7px rgba(34, 77, 97, 0.2);
        transition: all .25s linear;
        .text_wrapper {
          box-sizing: border-box;
          text-align: left;
          padding: 0rem .5rem .5rem 1rem;
          position: absolute;
          left: 3.5rem;
          top: 0;
          width: 21rem;
          opacity: 0;
          transition: opacity .25s linear;
          @include mobile {
            width: calc(100vw - 6rem - 3.5rem);
          }
          h4 {
            color: rgba($text-primary, .8);
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.75rem;
            margin: 0;
          }
          p {
            color: rgba($text-primary, .6);
            font-size: .85rem;
            font-weight: 500;
            line-height: 1.1rem;
            margin: .2rem 0;
          }
        }
        &.active {
          transform: translate(.9em, -.9em);
          transition: all .25s linear;
          box-shadow: -2rem 2rem 14px rgba(34, 77, 97, 0.4);
          filter: brightness(1);
          .text_wrapper {
            opacity: 1;
          }
          &:before, 
          &:after { 
            transition: all .25s linear; 
          }
          
          &:before {
            width: 1rem;
            top: .5rem;
            left: -1rem;
          }
          
          &:after {
            width: 1rem;
            bottom: -2.25rem;
            left: .75rem;
            height: 3.5rem;
          }
        }
        
        &:before, 
        &:after {
          content: '';
          position: absolute;
          transition: all .25s linear;
          width: .5em;
        }

        &:after {
          background: linear-gradient(-240deg, $blue-dk, $blue, $blue-disabled);
          height: 3.5rem;
          bottom: -2rem;
          left: 1.25rem;
          transform: rotate(90deg) skew(0,45deg);
        }
        
        &:before {
          background: $blue-disabled;
          height: 3.5rem;
          top: .25rem;
          left: -.5rem;
          transform: skewY(-45deg);
        }
      }
    }
  }
}
</style>
