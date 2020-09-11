<template>
  <div class="about_section">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#d3dde5" fill-opacity="1" d="M0,32L80,53.3C160,75,320,117,480,122.7C640,128,800,96,960,106.7C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <div class="text_wrapper">
      <h2 class="ds_section_header">
        <span>About me.</span>
      </h2>
      <p v-for="(p, i) in aboutMeParagraphs" :key="i">{{ p }}</p>
      <div class="ds_info_line">
        <div class="float_wrapper">
          <i class="fa fa-info"></i>
          <h4>Have any questions for me?<br> Go ahead and <span @click="$emit('goToContact')">contact me</span></h4>
        </div>
      </div>
    </div>
    <!--<breaker mainColor="light" bgColor="dark"></breaker>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f7f9" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,154.7C640,149,800,171,960,154.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
  --></div>
</template>

<script>
// import Breaker from "../components/Breaker.vue";
export default {
  name: "About",
  data() {
    return {
      aboutMeParagraphs: [
        "Hey, my name is Dallin Stagg! I live in the beautiful state of Utah where I am currently pursuing a master's degree in accounting at the Marriott School of Business. I've really enjoyed my coursework and look forwards to pursuing emphases in data analytics and asset management.",
        "I've always been fascinated by technology and how it has enabled such rapid innovation. Tech is a huge part of my life and a big motivation to me in my career and personal development.",
        "I also enjoy playing basketball and soccer, performing on drum set, spending time outdoors, experiencing new things, and making new friends. Thanks for stopping by."
      ],
      activeTileIndex: 0
    };
  },

  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.about_section {
  .text_wrapper {
    color: var(--text-2);
    font-weight: 400;
    margin: 0 auto;
    padding: 0rem 0 8rem;
    width: 50rem;
    text-align: justify;
    text-justify: inter-word;
    @include mobile {
      padding: 3rem 0 3rem;
      width: calc(100% - 4rem);
    }
  }
  .ds_section_header {
    margin-top: 0;
  }
  .ds_info_line {
    padding-bottom: 0;
  }
}
</style>
