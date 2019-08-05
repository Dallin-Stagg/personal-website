<template>
  <div class="work_page">
    <div class="work_outer_wrapper">
      <h2 class="ds_section_header">
        <span>My work.</span>
      </h2>
      <div class="item" v-for="(item, i) in items" :key="i">
        <h5 v-html="item.position_and_time"></h5>
        <h4>{{ item.company }}</h4>
        <p v-if="item.company_description" class="company">{{ item.company_description }}</p>
        <p>{{ item.description }}</p>
        <div class="case_study">Case study coming soon</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      link:
        "https://onedrive.live.com/embed?cid=F2D94E544E7CA959&resid=F2D94E544E7CA959%212878&authkey=AIjBRexX3Hd4eLg&em=2",
      items: [
        {
          company: "FREELANCE WEB DEVELOPER/DESIGNER",
          position_and_time: "Oct 2017 - <span style='color: #FFB100;'>Now</span>",
          description: "During my time as a freelancer, I've been blessed to play a big part in creating everything from static websites to enterprise software in the automobile, medical, and utilities industries. I've loved the opportunity to exercise accountability as I've set my own hours, and it has been a joy to rub shoulders with so many amazing clients."
        },
        {
          company: "ROOM CHOICE",
          position_and_time:
            "Frontend Developer, Mar 2017 - Nov 2018",
          description: 'At Room Choice, I went from nearly no coding knowledge to gaining a mastery over languages like HTML, CSS, and Javascript, while learning powerful frameworks such as SASS and Vue. I was a big part in the rebuild of our software, which included the student portal, management portal, accounting portal, and the company website.',
          company_description: 'Room Choice aims to reinvision how student housing should be done. Through social interaction between tenants based on AI driven personality and behavioral tests, students create their own groups and properties lease themselves, and management avoids the headaches of traditional property leasing.'
        }
      ]
    };
  },
  computed: {
    downloadLink() {
      return this.link.split("embed").join("download");
    }
  },
  methods: {
    print() {
      var divId = "print";
      var content = document.getElementById(divId).innerHTML;
      var mywindow = window.open("", "Print", "height=600,width=800");
      mywindow.document.write(
        "<html><head><title>Dallin Stagg - dallinstagg.com</title>"
      );
      mywindow.document.write("</head><body >");
      mywindow.document.write(content);
      mywindow.document.write("</body></html>");
      mywindow.document.close();
      mywindow.focus();
      mywindow.print();
      mywindow.close();
      return true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.work_page {
  padding-top: 6rem;
  position: relative;
  top: -8rem;
  width: 100%;
  .ds_section_header {
    margin-bottom: 4rem;
    span {
      background-color: $white;
    }
  }
  
  .work_outer_wrapper {
    background-color: $white;
    box-shadow: 0 2px 5px 0 rgba($gray-dk, 0.25),
        0 -18px 0px -8px rgba($white, 0.3), 0 -34px 0px -16px rgba($white, 0.2),
        0 -50px 0px -24px rgba($white, 0.1);
    box-sizing: border-box;
    margin: 0 auto;
    max-width: calc(100% - 3rem);
    padding: 4rem 4rem 6rem;
    width: 50rem;
    @include mobile {
      max-width: calc(100% - 2rem);
      padding: 3rem 2rem 5rem;
      width: calc(100% - 2rem);
    }
    .item {
      &:not(:last-child) {
        margin-bottom: 5rem;
      }
      h5 {
        color: $text-secondary;
        font-size: .8rem;
        font-weight: 500;
        margin: 0;
      }
      h4 {
        color: $text-primary;
        font-size: 1rem;
        font-weight: 700;
        margin: .75rem 0;
        position: relative;
        @include mobile {
          font-size: 1rem;
        }
      }
      p {
        color: $text-primary;
        font-size: .9rem;
        font-weight: 400;
        margin: 0;
        &.company {
          color: rgba($text-secondary, .8);
          font-size: .85rem;
          font-style: italic;
          line-height: 1.3;
          margin: 0 1.5rem 1rem;
          @include mobile {
            margin: 0 1rem .75rem;
          }
        }
      }
      .case_study {
        color: rgba($text-secondary, .5);
        font-size: .9rem;
        font-style: italic;
        font-weight: 500;
        margin-top: 1rem;
      }
    }
  }
}
</style>
