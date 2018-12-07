<template>
  <div class="portfolio">
    <div class="page_header">    
      <h1>Portfolio</h1>
      <h2>Check out my latest work</h2>
    </div>
    <div class="white_box" v-for="(item, i) in items" :key="i">
      <div class="image_wrapper">
        <div class="image" :class="item.image_class"></div>
      </div>
      <h1 class="project_title">{{ item.title }}</h1>
      <table class="button_container" :class="{ 'no_link': !item.link }">
        <tr>
          <td class="portfolio_btn">Screenshots</td>
          <td class="portfolio_btn">Info</td>
          <td class="portfolio_btn" v-if="item.link">Visit Site</td>
        </tr>
      </table>
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
            link: ''
          },
          {
            image_class: 'rc_com',
            title: 'Room Choice - Company Website',
            link: 'roomchoice.com'
          },
          {
            image_class: 'rc_manager',
            title: 'Room Choice - Manager Portal',
            link: ''
          },
          {
            image_class: 'mil',
            title: 'Millenium Auto Network',
            link: 'milleniumauto.net'
					},
          {
            image_class: 'rc_student',
            title: 'Room Choice - Student Portal',
            link: ''
					}
        ]
      }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global-styles.scss';

.portfolio {
  // background: linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
  // background: linear-gradient(45deg, $mint 15%, $blue-dk 85%);
  // background: radial-gradient(circle at 100% 0, $blue-dk 15%, $mint 85%);
  background: linear-gradient(45deg, rgba($blue, .8) 15%, rgba($blue-dk, .8) 85%),url('../assets/images/material-blue.jpg');
  background: linear-gradient(20deg, rgba($blue, .7) 15%, rgba($blue-dk, .7) 85%),linear-gradient(40deg, rgba($mint, .7) 15%, rgba($blue-dk, .7) 85%);
  background-image: url('../assets/images/overlay-striped.svg'), linear-gradient(10deg, #C06C84, #6C5B7B, #355C7D);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 0 5rem;
  .white_box {
    background-color: $white;
    border-radius: 4px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.5);
    margin: 0 auto 1rem;
    padding-top: 1rem;
    width: 24rem;
    max-width: calc(100% - 8rem);
    @include mobile {
      max-width: calc(100% - 2.5rem);
    }
    .item:not(:last-child) {
      border-bottom: 1px solid $gray;
    }
    .item {
      display: grid;
      grid-template-columns: 2fr 3fr;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      padding: 2rem 0;
      width: calc(100% - 5rem);
    }
  }
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 15rem;
    margin: 0 auto 1rem;
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
    color: $text-primary;
    font-size: 1.3rem;
    margin: 0;
    text-align: center;
  }
  .button_container {
    border-collapse: collapse;
    margin-top: 1rem;
    width: 100%;
    tr {
      td {
        border-top: 1px solid $gray-border;
        color: $text-secondary;
        cursor: pointer;
        font-size: .85rem;
        font-weight: 500;
        line-height: 2rem;
        text-align: center;
        text-transform: uppercase;
        width: calc(100% / 3);
        &:hover {
          background-color: $gray-lt;
        }
      }
      td:not(:first-child) {
        border-left: 1px solid $gray-border;
      }
      td:first-child:hover {
        border-bottom-left-radius: 5px;
      }
      td:last-child:hover {
        border-bottom-right-radius: 5px;
      }
    }
    &.no_link tr td {
      width: calc(100% / 2);
    }
  }
}

</style>
