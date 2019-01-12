<template>
  <div class="resume">
    <!--  -->
    <transition name="filter_slide">
      <div class="ds_filter" v-if="showFilter">
        <i class="fa fa-long-arrow-alt-right ds_close_btn left" @click="showFilter = false"></i>
        <div class="filter_section">
          <div
            class="filter_item"
            @click="filter.display = !filter.display"
            v-for="(filter, i) in filters"
            :key="i"
          >
            <h4>{{ filter.title }}</h4>
            <div class="ds_toggle purple" :class="{ 'toggled': filter.display }">
              <div class="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- -->
    <div class="page_header background">
      <h1>Resume</h1>
      <h2>See what I've been up to</h2>
      <!--<div class="download_btn_wrapper">
        <a :href="downloadLink">
          <div class="ds_btn green">
            <i class="fa fa-file-download"></i>&nbsp; Download Resume
          </div>
        </a>
      </div>-->
    </div>
    <div class="resume_outer_wrapper">
      <i class="fa fa-filter filter_toggle" @click="showFilter = !showFilter"></i>
      <div class="content">
        <h3>EXPERIENCE</h3>
        <div class="resume_item" v-for="(item, i) in experienceItems" :key="i">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
        <h3>EDUCATION</h3>
        <div class="resume_item" v-for="(item, i) in educationItems" :key="i + 50">
          <!-- fix for annoying vue key system -->
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
        <h3>SKILLS</h3>
        <h3>SERVICE</h3>
        <h3>PERSONAL</h3>
      </div>
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
      hardSkills: [
        "Vue JS",
        "HTML",
        "CSS (SCSS)",
        "SQL",
        "Microsoft Excel",
        "Product Management"
      ],
      softSkills: ["Spanish", "Client Communication"],
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
        },
        {
          title: "Service",
          display: false
        },
        {
          title: "Personal",
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
    //
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
  padding: 0 0 5rem;
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
      color: $text-secondary;
      cursor: pointer;
      overflow: auto;
      padding: 0.5rem 1rem;
      &:hover {
        box-shadow: 0 0 3px 0 rgba($gray-dk, 0.2);
        h4 {
          text-indent: 0.3rem;
        }
      }
      h4 {
        float: left;
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.5rem;
        margin: 0;
        transition: text-indent 0.1s linear;
      }
      .ds_toggle {
        float: right;
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
  max-width: calc(100% - 10rem);
  width: 56rem;
  @include mobile {
    max-width: calc(100% - 2rem);
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
    box-shadow: 0 1px 6px 0px rgba($gray-dk, 0.25),
      0 -18px 0px -8px rgba($white, 0.25), 0 -34px 0px -16px rgba($white, 0.2),
      0 -50px 0px -24px rgba($white, 0.15);
    padding: 3rem;
    transition: box-shadow 0.3s ease-out;
    @include mobile {
      padding: 3rem 1.5rem;
    }
    h3 {
      color: $purple;
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      @include mobile {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
    }
    h4 {
      color: $text-primary;
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      @include mobile {
        font-size: 1.2rem;
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
        margin: 0;
        width: 100%;
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
