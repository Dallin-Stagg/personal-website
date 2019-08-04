<template>
  <div class="resume_page">
    <div class="resume_outer_wrapper">
      <div id="resume-content">
        <div id="print">
          <div class="resume_item" v-for="(item, i) in items" :key="i">
            <h5 v-html="item.position_and_time"></h5>
            <h4>{{ item.title }}</h4>
            <h6>{{ item.company_description }}</h6>
            <p>{{ item.work_description }}</p>
          </div>
        </div>
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
      items: [
        {
          title: "FREELANCE WEB DEVELOPER/DESIGNER",
          position_and_time: "Lead Engineer, October 2017 - <span>Now</span>",
          company_description: '',
          description:
            "After gaining valuable experience in the industry, I was hired as a temporary developer directly in charge of optimizing the company website for mobile devices. As part of my work I overhauled the current stylesheets and implemented media queries to assist in overall visual and user experience enhancements. I assisted lead developers of their team in the optimization of load time and image rendering on a website that requires numerous pictures to be loaded quickly and effectively. Working with Millennium was an extremely valuable experience both because of the experience I gained and the opportunity to freelance and work remotely for an outside company."
        },
        {
          title: "ROOM CHOICE",
          position_and_time:
            "Frontend Software Developer, March 2017 - November 2018",
          company_description: 'asdf',
          description:
            "At Room Choice, I progressed from having a minimal coding background, to a mastery of several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. Regular completion of these projects validated that quality stems from attention to detail and client-first thinking. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and company website. This gave me the opportunity to test the valuable skills I had learned, as I created robust and clean stylesheets to enhance user experience, to implimenting global media queries to allow users to lease beds and sign contracts from anywhere!"
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

</style>
