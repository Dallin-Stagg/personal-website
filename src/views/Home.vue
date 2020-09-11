<template>
  <div class="home_page">
    <myNav :scroll="scrollY" @goToPortfolio="scrollTo('portfolio_section')" @goToContact="scrollTo('connect_section')" @goToAbout="scrollTo('about_section')"></myNav>
    <div id="website_hero" :class="{ 'dark_theme': darkTheme }">
      <div class="left">
        <h3>Hi, I'm</h3>
        <h1>{{ displayText }}</h1>
        <p>Welcome! Make yourself at home and <span @click="scrollTo('connect_section')">contact me</span> with any questions. Thanks for stopping by...</p>
        <div class="ds_btn" @click="scrollTo('portfolio_section')">
          <div>Portfolio</div>
          <i class="fa fa-eye"></i>
        </div>
      </div>
      <!-- <div class="svg_wrapper">
        
        preserveAspectRatio: makes sure the triangle is scalable
        viewbox: points stretches from the parent
        
        <svg preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon class="white" points="0,0 0,100 100,100 100,0 50,90" opacity="1"></polygon>
          <polygon class="med" points="0,7 50,97 100,7 100,10 50,100 0,10" opacity="1"></polygon>
        </svg>
      </div>-->
    </div>
    <div class="section_wrapper">
      <myPortfolio id="portfolio_section" @goToThemes="scrollTo('themes_section')" @goToPortfolio="scrollTo('portfolio_section')" @goToContact="scrollTo('connect_section')"></myPortfolio>
      <myAbout @goToContact="scrollTo('connect_section')" id="about_section"></myAbout>
      <!--<myWork @goToContact="scrollTo('connect_section')" id="work_section"></myWork>-->
      <myConnect id="connect_section"></myConnect>
    </div>
  </div>
</template>

<script>
import MyPortfolio from '../components/Portfolio.vue';
import MyAbout from '../components/About.vue';
import MyWork from "../components/Work.vue";
import MyConnect from '../components/Connect.vue';
import MyNav from '../components/Nav.vue';
export default {
  name: "Home",
  components: {
    MyPortfolio: MyPortfolio,
    myAbout: MyAbout,
    myWork: MyWork,
    myConnect: MyConnect,
    myNav: MyNav
  },
  props: ['scrollY'],
  data() {
    return {
      titles: ["a student", "a developer", "a musician", "Dallin Stagg"],
      displayedTitleLength: 0,
      typing: true,
      titleIndex: 0,
      //
      links: [
        { name: "About", id: "about_section" },
        { name: "Work", id: "work_section" },
        { name: "Connect", id: "connect_section" }
      ]
    };
  },
  computed: {
    activeSection() {
      if (this.scrollY > 0) {
        let aboutEl = document.getElementById('about_section');
        let scrollAbout = aboutEl.offsetTop - aboutEl.scrollTop + aboutEl.clientTop - 80;
        let workEl = document.getElementById('work_section');
        let scrollWork = workEl.offsetTop - workEl.scrollTop + workEl.clientTop - 100;
        let connectEl = document.getElementById('connect_section');
        let scrollConnect = connectEl.offsetTop - connectEl.scrollTop + connectEl.clientTop - 50;
        if (this.scrollY >= scrollConnect) {
          return 'connect_section'
        } else if (this.scrollY >= scrollWork) {
          return 'work_section'
        } else if (this.scrollY >= scrollAbout) {
          return 'about_section'
        }
      }
      
      return ''
    },
    displayText() {
      if (this.displayedTitleLength) {
        return this.titles[this.titleIndex].substring(
          0,
          this.displayedTitleLength
        );
      }
      return "";
    },
    darkTheme() {
      return this.$store.state.darkTheme
    }
  },
  mounted() {
    setTimeout(this.updateTitle, 900);
  },
  methods: {
    scrollTo(id) {
      var elmnt = document.getElementById(id);
      elmnt.scrollIntoView();
    },
    updateTitle() {
      if (
        this.typing &&
        this.displayedTitleLength < this.titles[this.titleIndex].length
      ) {
        this.displayedTitleLength += 1;
        if (this.titles[this.titleIndex][this.displayedTitleLength] === " ") {
          this.displayedTitleLength += 1;
        }
        // type speed
        setTimeout(this.updateTitle, 125);
      } else if (
        this.typing &&
        this.displayedTitleLength === this.titles[this.titleIndex].length
      ) {
        this.typing = false;
        setTimeout(this.updateTitle, 2000);
      } else if (
        !this.typing &&
        this.displayedTitleLength > 0 &&
        this.titleIndex !== this.titles.length - 1
      ) {
        this.displayedTitleLength -= 1;
        if (this.titles[this.titleIndex][this.displayedTitleLength] === " ") {
          this.displayedTitleLength -= 1;
        }
        // backspace speed
        setTimeout(this.updateTitle, 200);
      } else if (!this.typing && !this.displayedTitleLength) {
        this.titleIndex += 1;
        this.typing = true;
        setTimeout(this.updateTitle, 800);
      }
    }
  }
};
</script>
<style lang="scss">
@import "../assets/styles/global-styles.scss";


#website_hero {
  background-image: linear-gradient(0deg, rgba(0,0,0, .9), rgba(0,0,0, .7)), url(../assets/images/office-windows.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 11rem calc(16vw + 4rem);
  position: relative;
  @include mobile {
    padding: 16rem 3rem 13rem;
  }
  &.dark_theme {
    background-image: linear-gradient(0deg, rgba(0,0,0, .4), rgba(0,0,0, .8)), url(../assets/images/Liquid-Cheese.svg);
  }
  .left {
    color: rgba(white, .5);
    width: 30rem;
    @include mobile {
      width: 100%;
    }
    h3 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: normal;
    }
    h1 {
      animation: flashBorder 1.2s infinite;
      border-right: 5px solid rgba(white, .1);
      color: $white;
      display: inline;
      font-size: 2.75rem;
      font-weight: bold;
      line-height: 4rem;
      height: 4rem;
      margin: 0;
      padding-right: .15rem;
    }
    @keyframes flashBorder {
      0% {
        border-color: rgba(white, 0);
      }
      50% {
        border-color: rgba(white, .1);
      }
      100% {
        border-color: rgba(white, 0);
      }
    }
    p {
      line-height: 1.4rem;
      margin-top: .5rem;
      span {
        cursor: pointer;
        position: relative;
        &:hover {
          &::before {
            background-color: rgba($white, .2);
          }
        }
        &::before {
          background-color: rgba(white, .1);
          content: "";
          display: inline-block;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: .4rem;
        }
      }
    }
  }
  /*.svg_wrapper {
    height: calc(3rem + 3vw);
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    svg {
      width: 100%;
      height: 100%;
      .white {
        fill: var(--background-1);
      }
      .light {
        fill: var(--background-2);
      }
      .med {
        fill: var(--border);
      }
    }
  }*/
}
.section_wrapper {
  
}

</style>
