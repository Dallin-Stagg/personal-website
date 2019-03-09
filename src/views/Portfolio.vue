<template>
  <div class="portfolio">
    <div class="portfolio_wrapper">
      <div class="page_header background">
        <h1>Portfolio</h1>
        <h2>Check out my latest work</h2>
      </div>
      <div class="box_wrapper">
        <div class="white_box" v-for="(item, i) in items" :key="i">
          <div class="image" :class="item.image_class"></div>
          <h1 class="project_title">{{ item.title }}</h1>
          <div class="info_cover">
            <h4>{{ item.description }}</h4>
          </div>
        </div>
      </div>
      <div class="ds_info_line">
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
export default {
  name: "Portfolio",
  data() {
    return {
      items: [
        {
          image_class: "rc_accounting",
          title: "Room Choice - Accounting",
          description:
            "A powerful accounting software with all the features you'd expect from scheduled journal entry creation to intelligent financial statement projections.",
          link: ""
        },
        {
          image_class: "rc_com",
          title: "Room Choice - Company Website",
          description:
            "The company website. Linked in all marketing campaigns and ads.",
          link: "roomchoice.com"
        },
        {
          image_class: "rc_manager",
          title: "Room Choice - Manager Portal",
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
          image_class: "rc_student",
          title: "Room Choice - Student Portal",
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.portfolio {
  overflow: hidden;
}
.portfolio_wrapper {
  padding: 0 0 5rem;
}

.box_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin: 1rem auto;
  position: relative;
  width: 65rem;
  z-index: 2;
  @include mobile {
    display: block;
    width: 100%;
  }
}
.white_box {
  background-color: $white;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0px rgba($gray-dk, 0.25);
  cursor: pointer;
  margin: 0 auto 1.5rem;
  padding: 1rem 0 0.1rem;
  position: relative;
  width: 20rem;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  @include mobile {
    width: calc(100% - 2rem);
  }
  &:hover {
    box-shadow: 0 5px 25px 0 rgba(24, 55, 69, 0.3);
    transform: scale(1.04);
    .info_cover {
      height: 100%;
      opacity: 1;
    }
    @include mobile {
      box-shadow: 0 1px 6px 0px rgba($gray-dk, 0.25);
      transform: scale(1);
      .info_cover {
        height: 0;
        opacity: 0;
      }
    }
  }
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 12rem;
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
  .project_title {
    color: $text-secondary;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2rem;
    margin: 1rem 0;
    text-align: center;
  }
  .info_cover {
    background-color: $white;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0;
    opacity: 0.7;
    overflow: hidden;
    position: absolute;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: height 0.2s ease-out, opacity 0.2s ease-out;
    h4 {
      color: $text-secondary;
      font-size: 1rem;
      font-weight: 500;
      margin: 0 1.5rem;
    }
  }
}
</style>
