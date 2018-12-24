<template>
  <div class="portfolio">
    <div class="portfolio_background">
      <vue-particles color="#dedede"></vue-particles>
    </div>
    <div class="portfolio_wrapper">
      <div class="portfolio_content">
        <div class="page_header">    
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
  overflow: hidden;
}
.portfolio_wrapper {
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .portfolio_content {
    padding: 3rem 0 5rem;
  }
}
.portfolio_background {
  background-image: linear-gradient(10deg, #6C5B7B, $blue-dk);
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  #particles-js {
    height: 100vh;
  }
}

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
  cursor: pointer;
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
      background-image: url('../assets/images/student-mockup.png');
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0;
    opacity: .7;
    overflow: hidden;
    position: absolute;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: height .2s ease-out, opacity .2s ease-out;
    h4 {
      color: $text-primary;
      font-size: .95rem;
      font-weight: 400;
      margin: 0 1.5rem;
    }
  }
}

</style>
