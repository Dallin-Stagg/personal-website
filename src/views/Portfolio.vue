<template>
  <div class="portfolio">
    <div class="portfolio_wrapper">
      <div class="page_header background with_polygon">
        <h1>Portfolio</h1>
        <h2>Check out my latest work</h2>
        <div class="svg_wrapper">
          <!-- 
          preserveAspectRatio: makes sure the triangle is scalable
          viewbox: points stretches from the parent
          -->
          <svg preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon class="light" points="0,0 0,100 100,100 100,0 50,90" opacity="1"></polygon>
            <polygon class="med" points="0,7 50,97 100,7 100,10 50,100 0,10" opacity="1"></polygon>
          </svg>
        </div>
      </div>
      <div v-for="(item, i) in items" :key="i" :class="getColor(i)" class="portfolio_item">
        <div class="content">
          <div class="mobile">
            <div class="image" :class="item.image_class"></div>
          </div>
          <div v-if="i % 2 === 0" class="desktop">
            <div class="image" :class="item.image_class"></div>
          </div>
          <div class="text_wrapper">
            <h4 v-if="item.company">{{ item.company }}</h4>
            <h2 class="project_title">{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="ds_btn grad">Learn More</div>
          </div>
          <div v-if="i % 2 === 1" class="desktop">
            <div class="image" :class="item.image_class"></div>
          </div>
        </div>
        <dsBreaker :passedColor="getColor(i)"></dsBreaker>
      </div>
      <div class="ds_info_line white">
        <div class="float_wrapper">
          <i class="fa fa-info"></i>
          <h4>
            <strong>Trying to collaborate?</strong>
            <br>Just contact me!
          </h4>
          <div class="info_line_btn" @click="$router.push({ name: 'Contact' })">
            Take me there
            <i class="fa fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DsBreaker from "../components/Breaker.vue";

export default {
  name: "Portfolio",
  components: {
    dsBreaker: DsBreaker
  },
  data() {
    return {
      items: [
        {
          company: "Room Choice",
          image_class: "rc_accounting",
          title: "Accounting",
          description:
            "A powerful accounting software with all the features you'd expect from scheduled journal entry creation to intelligent financial statement projections.",
          link: ""
        },
        {
          company: "Room Choice",
          image_class: "rc_com",
          title: "Company Website",
          description:
            "The company website. Linked in all marketing campaigns and ads.",
          link: "roomchoice.com"
        },
        {
          company: "Room Choice",
          image_class: "rc_manager",
          title: "Manager Portal",
          description:
            "The feature-rich student housing management system used for everything from monitoring the leasing process to viewing and exporting customizable and powerful financial reports.",
          link: ""
        },
        {
          image_class: "mil",
          title: "Millenium Auto Network",
          description: "The company website for Millenium Auto Network.",
          link: "milleniumauto.net"
        },
        {
          company: "Room Choice",
          image_class: "rc_student",
          title: "Student Portal",
          description:
            "A portal to the tenant-side Room Choice experience. Complete with application, contract signing, schedulable payments, maintenance requests, social media functionality and much more!",
          link: ""
        }
      ],
      infoToShow: ""
    };
  },
  methods: {
    openLink(link) {
      window.open("https://" + link, "_blank");
    },
    getColor(index) {
      if (index % 2 === 0) {
        return "light";
      }
      return "white";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";

.portfolio_item {
  &.white {
    background-color: $white;
  }
  &.light {
    background-color: $gray-lt;
  }
  .content {
    padding: 4rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 0 auto;
    width: calc(50% + 20rem);
    z-index: 2;
    @include mobile {
      display: block;
      width: 100%;
    }
    .desktop {
      @include mobile {
        display: none;
      }
    }
    .mobile {
      display: none;
      @include mobile {
        display: block;
      }
    }
    .image {
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 20rem;
      margin: 0 auto;
      width: 100%;
      &.rc_accounting {
        background-image: url("../assets/images/millenium-mobile.png");
      }
      &.rc_com {
        background-image: url("../assets/images/millenium-mobile.png");
      }
      &.rc_manager {
        background-image: url("../assets/images/millenium-mobile.png");
      }
      &.rc_student {
        background-image: url("../assets/images/student-mockup.png");
      }
      &.mil {
        background-image: url("../assets/images/millenium-mobile.png");
      }
    }
    .text_wrapper {
      padding: 0 2rem;
      @include mobile {
        text-align: center;
      }
    }
  }
}
</style>
