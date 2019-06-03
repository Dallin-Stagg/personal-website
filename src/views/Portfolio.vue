<template>
  <div class="portfolio">
    <div class="portfolio_wrapper">
      <div class="page_header background student with_polygon">
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
      <div v-for="(item, i) in items" :key="i" class="portfolio_item">
        <div class="floater_wrapper">
          <div v-if="item.item_id === 'rc_accounting'">
            <rCAccounting :style="{ transform: 'translateY(' + ((scrollY / 350) + .5) + 'rem)' }"></rCAccounting>
          </div>
          <div v-if="item.item_id === 'rc_com'">
            <rCWebsiteModal :style="{ transform: 'translateY(' + ((scrollY / 300) - 1.5) + 'rem)' }"></rCWebsiteModal>
          </div>
        </div>
        <div class="text_wrapper">
          <h4 v-if="item.company">{{ item.company }}</h4>
          <h2>{{ item.title }}</h2>
          <div class="breaker"></div>
          <p>{{ item.description }}</p>
          <!--<div class="ds_btn blue outlined">Learn More</div>-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import DsBreaker from "../components/Breaker.vue";
import RCWebsiteModal from "../components/RCWebsiteModal.vue";
import RCAccounting from "../components/RCAccountingBalanceSheet.vue";
export default {
  name: "Portfolio",
  components: {
    dsBreaker: DsBreaker,
    rCWebsiteModal: RCWebsiteModal,
    rCAccounting: RCAccounting
  },
  props: ['scrollY'],
  data() {
    return {
      items: [
        /*{
          company: "Redstone Residential",
          item_id: "redstone",
          title: "Utilities",
          description:
            "This is a placeholder description",
          link: ""
        },*/
        {
          company: "Room Choice",
          item_id: "rc_accounting",
          title: "Accounting",
          description:
            "I was tasked to head up frontend development on this project. Designed and largely built by myself, our powerful accounting software boasted all the features you'd expect from scheduled journal entry creation to intelligent financial statement projections.",
          link: ""
        },
        {
          company: "Room Choice",
          item_id: "rc_com",
          title: "Company Website",
          description:
            "Built from the ground up, I took a lead role on the frontend development of our company website. To many clients, this website was their first impression with us. As this site was linked in all marketing campaigns and ads, we saw a lot of traffic being pushed to the website and our conversion rate greatly increased with the newly reworked site.",
          link: "roomchoice.com"
        },
        {
          company: "Room Choice",
          item_id: "rc_manager",
          title: "Manager Portal",
          description:
            "As an integral part of the dev team, I brainstormed ideas with company executives until we had a clear vision of the end product. The feature-rich student housing management system is used by property management groups for everything from monitoring the leasing process to viewing and exporting customizable and insightful financial reports.",
          link: ""
        },
        {
          company: "Millenium Auto Network",
          item_id: "mil",
          title: "Company Website",
          description: "After gaining valuable experience in website mobile optimization, I got hired for my first remote freelance job. Using my skillset, I optimized the site for mobile users across operating systems and the site saw increased traffic and lead generation from its mobile viewers.",
          link: "milleniumauto.net"
        },
        {
          company: "Room Choice",
          item_id: "rc_student",
          title: "Student Portal",
          description:
            "My first project was a bottom to top rebuild of our student experience using Vue. The service offered lease application submission, contract signing, schedulable payments, maintenance requests, social media functionality and much more!",
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
  background-color: $gray-lt;
  border-bottom: 1px solid rgba($gray, .8);
  padding: 0 0 0;
}
.breaker {
  background-image: linear-gradient(-60deg, $purple-dk, #3a66c4, $blue, $mint);
  border-radius: 2px;
  height: 4px;
  margin: 1rem 0;
  width: 5rem;
}
.portfolio_item {
  background-color: $gray-lt;
  box-shadow: 0px 6px 16px rgba(34, 77, 97, 0.2);
  border-bottom: 1px solid $gray-lt;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "text float";
  overflow: hidden;
  @include mobile {
    grid-template-columns: 1fr;
    grid-template-areas: "float" "text";
  }
  .floater_wrapper {
    grid-area: float;
    padding: 1rem 0;
  }
  .text_wrapper {
    grid-area: text;
    margin: 0 0 0 calc(45% - 8rem);
    padding: 7rem 0;
    width: 20rem;
    @include mobile {
      margin: 0 auto;
      padding: 4rem 0;
      width: calc(100% - 4rem);
    }
    h4 {
      color: $text-secondary;
      font-size: .85rem;
      font-weight: 500;
      margin: 0;
    }
    h2 {
      color: $text-primary;
      font-size: 1.5rem;
      margin: 0;
    }
    p {
      color: $text-secondary;
      font-size: .9rem;
      line-height: 1.4rem;
      margin: 0;
    }
  }
}
</style>
