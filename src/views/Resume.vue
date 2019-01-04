<template>
  <div class="resume">
    <transition name="filter_slide">
      <div class="ds_filter" v-if="showFilter">
        <i class="fa fa-long-arrow-alt-right ds_close_btn left" @click="closeFilter()"></i>
        <div class="filter_section" v-for="(item, i) in filters" :key="i">
          <div
            class="filter_item"
            :class="{ 'opened': openedFilterSection === i }"
            @click="toggleFilterSection(i)"
          >
            <h4>{{ item.title }}</h4>
            <i class="fa fa-chevron-down"></i>
          </div>
          <transition name="subsection_stretch">
            <div class="filter_subsection" v-if="openedFilterSection === i">
              <div class="filter_sub_item" @click="item.display = !item.display" v-for="thing in 5">
                <h5>Display {{ item.title }}</h5>
                <div class="ds_toggle purple" :class="{ 'toggled': item.display }">
                  <div class="dot"></div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
    <div class="page_header">
      <h1>Resume</h1>
      <h2>See what I've been up to</h2>
    </div>
    <div class="download_btn_wrapper">
      <a :href="downloadLink">
        <div class="ds_btn green">
          <i class="fa fa-file-download"></i>&nbsp; Download Resume
        </div>
      </a>
    </div>
    <div class="resume_outer_wrapper">
      <svg height="40">
        <polygon fill="white" points="0,40 896,0 896,40"></polygon>
      </svg>
      <i class="fa fa-filter filter_toggle" @click="showFilter = !showFilter"></i>
      <div class="content">
        <h3>EXPERIENCE</h3>
        <div class="resume_item" v-for="(item, i) in experienceItems" :key="i">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
        <h3>EDUCATION</h3>
        <div class="resume_item" v-for="(item, i) in educationItems" :key="i">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
        <h3>SKILLS</h3>
      </div>
      <svg height="40">
        <polygon fill="white" points="0,0 0,40 896,0"></polygon>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      link:
        "https://onedrive.live.com/embed?cid=F2D94E544E7CA959&resid=F2D94E544E7CA959%212878&authkey=AIjBRexX3Hd4eLg&em=2",
      experienceItems: [
        {
          image_class: "mil",
          title: "MILLENIUM AUTO NETWORK",
          position_and_time: "Software Developer, October 2017 - November 2017",
          area: "Provo, UT",
          description:
            "After gaining valuable experience in the industry, I was hired as a temporary developer directly in charge of optimizing the company website for mobile devices. As part of my work I overhauled the current stylesheets and implemented media queries to assist in overall visual and user experience enhancements. I assisted lead developers of their team in the optimization of load time and image rendering on a website that requires numerous pictures to be loaded quickly and effectively. Working with Millennium was an extremely valuable experience both because of the experience I gained and the opportunity to freelance and work remotely for an outside company."
        },
        {
          image_class: "rc",
          title: "ROOM CHOICE",
          position_and_time:
            "Frontend Software Developer, March 2017 - November 2018",
          area: "Provo, UT",
          description:
            "At Room Choice, I progressed from having a minimal coding background, to a mastery of several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. Regular completion of these projects validated that quality stems from attention to detail and client-first thinking. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and company website. This gave me the opportunity to test the valuable skills I had learned, as I created robust and clean stylesheets to enhance user experience, to implimenting global media queries to allow users to lease beds and sign contracts from anywhere!"
        }
      ],
      educationItems: [
        {
          image_class: "byu",
          title: "BRIGHAM YOUNG UNIVERSITY",
          position_and_time: "Accounting, August 2017 -",
          area: "Provo, UT",
          description:
            "BYU presented unprecedented scale and diversity of opportunity. My professors constantly pushed me to expand and adjust the way I think in a pursuit to constantly improve who I am as a creator. My experience performming with BYU Synthesis and other top ensembles enstilled in me a passion for music and creating a unique identity. My engagement in the Tech, Private Equity and Venture Capital, and Corporate Finance clubs helped advance my learning and introduced me to a wealth of extremely intelligent peers. BYU taught me to love learning, serve without restraint, and to push my boundaries as far as they will go for the betterment of all those I come in contact with."
        }
      ],
      hardSkills: [],
      softSkills: [],
      showFilter: false,
      filters: [
        {
          title: "Experience",
          display: true
        },
        {
          title: "Education",
          display: true
        },
        {
          title: "Skills",
          display: true
        }
      ],
      openedFilterSection: ""
    };
  },
  computed: {
    downloadLink() {
      return this.link.split("embed").join("download");
    }
  },
  methods: {
    toggleFilterSection(filter) {
      if (this.openedFilterSection !== filter) {
        this.openedFilterSection = filter;
      } else {
        this.openedFilterSection = "";
      }
    },
    closeFilter() {
      this.showFilter = false;
      this.openedFilterSection = "";
    }
  },
  mounted() {
    this.experienceItems.reverse();
    this.educationItems.reverse();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.filter_slide-enter-active,
.filter_slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.filter_slide-enter,
.filter_slide-leave-to {
  opacity: 0;
  transform: translateX(24rem);
}

.resume {
  background-color: $gray;
  padding: 3rem 0 5rem;
}
.ds_filter {
  background-color: $white;
  border-left: 1px solid $gray-border;
  box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.3);
  box-sizing: border-box;
  width: 18rem;
  height: 100vh;
  padding-top: 4rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  .filter_section {
    user-select: none;
    .filter_item {
      border-radius: 4px;
      color: $text-secondary;
      cursor: pointer;

      position: relative;
      transition: margin 0.15s linear;
      &:hover {
        h4 {
          text-indent: 1.2rem;
        }
      }
      &.opened {
        h4 {
        }
        i {
          transform: rotate(180deg);
        }
      }
      h4 {
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 2.5rem;
        margin: 0;
        text-indent: 1rem;
        transition: text-indent 0.1s linear;
      }
      i {
        font-size: 0.7rem;
        line-height: 2.5rem;
        position: absolute;
        top: 0;
        right: 1rem;
        transition: transform 0.2s linear;
      }
    }
    .filter_subsection {
      background-color: $gray-lt;
      border-top: 1px solid $gray-border;
      border-bottom: 1px solid $gray-border;
      box-shadow: inset 0 1px 10px 0 rgba(24, 55, 69, 0.1);
      box-sizing: border-box;
      max-height: 100vh; // must be bigger than ever achieved
      overflow: hidden;
      padding: 1rem 0;
      will-change: max-height;
      &.subsection_stretch-enter-active,
      &.subsection_stretch-leave-active {
        transition: opacity 0.3s, max-height 0.3s, padding 0.3s;
      }
      &.subsection_stretch-enter,
      &.subsection_stretch-leave-to {
        opacity: 0;
        max-height: 1px;
        padding: 0;
      }
      .filter_sub_item {
        margin: 0 1rem;
        overflow: auto;
        padding: 0.4rem 0.3rem;
        h5 {
          color: $text-secondary;
          float: left;
          font-size: 0.8rem;
          font-weight: 500;
          line-height: 1.5rem;
          margin: 0;
        }
        .ds_toggle {
          float: right;
        }
      }
      .filter_sub_item:not(:last-child) {
        border-bottom: 1px solid $gray-border;
      }
    }
  }
}
.download_btn_wrapper {
  text-align: center;
  .download_btn {
    background-color: $white;
    border-radius: 1.5rem;
    display: inline-block;
    line-height: 3rem;
    padding: 0 1.5rem;
  }
}
.resume_outer_wrapper {
  margin: 0 auto;
  position: relative;
  width: 56rem;
  filter: drop-shadow(13px -10px 0px rgba($white, 0.75))
    drop-shadow(1px -1px 4px rgba($gray-dk, 0.2));
  svg {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .filter_toggle {
    border-radius: 1.5rem;
    box-shadow: 0 2px 6px 2px rgba($purple, 0.15);
    color: $purple;
    cursor: pointer;
    font-size: 0.75rem;
    line-height: 2rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    text-align: center;
    width: 2rem;
  }
  .content {
    background-color: $white;
    padding: 3rem;
    h3 {
      color: $purple;
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      @include mobile {
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
      }
    }
    h4 {
      color: $text-primary;
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      @include mobile {
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
      }
    }
    .resume_item {
      background-color: $white;
      border-radius: 4px;
      box-sizing: border-box;
      margin: 1rem 0 1rem 6rem;
      width: calc(100% - 6rem);
      @include mobile {
        border: 1px solid $gray-border;
        border-radius: 0.5rem;
        padding: 1.5rem 1.3rem;
        width: calc(100% - 2rem);
      }
      p {
        color: $text-secondary;
        font-size: 0.9rem;
        font-weight: 400;
        margin: 0.5rem 0;
        text-align: justify;
        @include mobile {
          font-size: 1rem;
          text-align: left;
        }
      }
      .justify {
        text-align: justify;
        word-spacing: -10px;
      }
      .justify:after {
        content: "";
        display: inline-block;
        width: 100%;
      }
      ul {
        li {
          color: $text-secondary;
          font-size: 0.95rem;
          @include mobile {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}
</style>
