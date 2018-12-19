<template>
  <div class="portfolio">
    <div class="page_header">    
      <h1>Portfolio</h1>
      <h2>Check out my latest work</h2>
    </div>
    <div class="box_wrapper">
      <div class="white_box" v-for="(item, i) in items" :key="i">
        <div class="image" :class="item.image_class"></div>
        <h1 class="project_title">{{ item.title }}</h1>
        <div class="info_cover">
          <div class="buttons_wrapper">
            <i class="fa fa-images"></i>
            <i class="fa fa-location-arrow"></i>
          </div>
          <h4>{{ item.description }}</h4>
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
            image_class: 'rc_accounting',
            title: 'Room Choice - Accounting',
            description: "A powerful accounting software with all the features you'd expect from scheduled journal entry creation to intelligent financial statement projections.",
            link: ''
          },
          {
            image_class: 'rc_com',
            title: 'Room Choice - Company Website',
            description: 'The company website. Linked in all marketing campaigns and ads.',
            link: 'roomchoice.com'
          },
          {
            image_class: 'rc_manager',
            title: 'Room Choice - Manager Portal',
            description: 'The feature-rich student housing management system used for everything from controlling the leasing process to viewing and exporting customizable and powerful financial reports.',
            link: ''
          },
          {
            image_class: 'mil',
            title: 'Millenium Auto Network',
            description: 'The company website for Millenium Auto Network.',
            link: 'milleniumauto.net'
					},
          {
            image_class: 'rc_student',
            title: 'Room Choice - Student Portal',
            description: 'A portal to the tenant-side Room Choice experience. Complete with application, contract signing, schedulable payments, maintenance requests, social media functionality and much more!',
            link: ''
					}
        ],
        infoToShow: ''
      }
  },
  methods: {
    openLink(link) {
      window.open('https://' + link, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global-styles.scss';

.portfolio {
  // background-image: linear-gradient(10deg, #6C5B7B, #355C7D, $blue-dk);
  background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 0 5rem;
  .box_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin: 0 auto;
    width: 65rem;
    @include mobile {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
  .white_box {
    background-color: $white;
    border-radius: 4px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.4);
    margin: 0 auto 1.5rem;
    padding-top: 1rem;
    position: relative;
    width: 20rem;
    transition: transform .2s ease-out;
    @include mobile {
      width: calc(100% - 3rem);
    }
    &:hover {
      transform: scale(1.03);
      .info_cover {
        height: 100%;
        opacity: 1;
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
        background-image: url('../assets/images/millenium-mobile.png');
      }
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
      height: 0;
      opacity: .7;
      overflow: hidden;
      position: absolute;
      text-align: center;
      bottom: 0;
      left: 0;
      width: 100%;
      transition: height .2s ease-out, opacity .2s ease-out;
      .buttons_wrapper {
        background: linear-gradient(10deg, #6C5B7B, #355C7D, $blue-dk);
        border-radius: 2rem;
        box-shadow: inset 0px 2px 20px rgba(0, 0, 0, 0.3);
        display: inline-block;
        margin: 1rem auto;
        padding: .3rem;
        i {
          background-color: $white;
          border-radius: 50%;
          box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
          color: $text-secondary;
          cursor: pointer;
          line-height: 2.5rem;
          margin: .3rem;
          text-align: center;
          width: 2.5rem;
          transition: transform .2s ease-out;
          &:hover {
            background-color: rgba($white, .9);
          }
        }
      }
      h4 {
        color: $text-primary;
        font-size: .95rem;
        font-weight: 400;
        margin: 0 1.5rem;
      }
    }
  }
}

</style>
