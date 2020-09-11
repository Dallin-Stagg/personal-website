<template>
  <div class="work_page">
    <div class="text_wrapper">
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
      <div class="ds_info_line no_padding">
        <div class="float_wrapper">
          <i class="fa fa-info"></i>
          <h4>Would you like an official copy of my resume?<br> Go ahead and <span @click="$emit('goToContact')">contact me</span></h4>
        </div>
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
          company: "EXXONMOBIL",
          position_and_time: "Financial Technology Analyst Intern, May 2020 - August 2020",
          description: "I couldn't be more excited to apply the skills I've learned to real world problems with such an innovative company at their headquarters in Houston Texas!"
        },
        {
          company: "FREELANCE WEB DEVELOPER",
          position_and_time: "Frontend Developer, Oct 2017 - <span style='color: #FFB100;'>Now</span>",
          description: "During my time as a freelancer, I've been blessed to play a big part in creating everything from static websites to enterprise software in the automobile, medical, and utilities industries. I've loved the opportunity to exercise accountability as I've set my own hours, and it has been a joy to rub shoulders with so many amazing clients."
        },
        {
          company: "ROOM CHOICE",
          position_and_time:
            "Frontend Developer, Mar 2017 - Nov 2018",
          description: "Room Choice aims to reinvision how student housing should be done. Through social interaction between tenants based on AI driven personality and behavioral tests, students create their own groups and properties lease themselves, and management avoids the headaches of traditional property leasing."
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
  background-color: var(--bg-2);
  .text_wrapper {
    
    padding: 10rem 0 7rem;
    margin: 0 auto;
    max-width: calc(100% - 4rem);
    width: 40rem;
    .ds_section_header {
      margin: 0;
      margin-bottom: 3rem;
    }
    .item {
      &:not(:last-child) {
        margin-bottom: 5rem;
      }
      h5 {
        color: var(--text-2);
        font-size: .9rem;
        font-weight: 500;
        margin: 0;
        opacity: .7;
      }
      h4 {
        color: var(--text-1);
        font-size: 1.1rem;
        font-weight: 700;
        margin: .75rem 0;
        position: relative;
      }
      p {
        color: var(--text-2);
        font-weight: 400;
        margin: 0;
        text-align: justify;
        text-justify: inter-word;
      }
      .case_study {
        color: var(--text-2);
        font-size: .9rem;
        font-style: italic;
        font-weight: 500;
        margin-top: 1rem;
        opacity: .5;
      }
    }
  }
}

</style>
