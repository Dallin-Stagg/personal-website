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
      <i class="fa fa-print filter_toggle" @click="print()"></i>
      <div id="resume-content">
        <h3>EXPERIENCE</h3>
        <div class="resume_item" v-for="(item, i) in experienceItems" :key="i">
          <h4>{{ item.title }}</h4>
          <h5>{{ item.position_and_time }}</h5>
          <ul>
            <li v-for="(text, j) in item.list" :key="j">{{ text }}</li>
          </ul>
        </div>
        <h3>EDUCATION</h3>
        <div class="resume_item" v-for="(item, i) in educationItems" :key="i + 10">
          <!-- fix for annoying vue key system -->
          <h4>{{ item.title }}</h4>
          <h5>{{ item.position_and_time }}</h5>
          <ul>
            <li v-for="(text, j) in item.list" :key="j">{{ text }}</li>
          </ul>
        </div>
        <h3>SKILLS</h3>
        <div class="skills_item">
          <ul>
            <li v-for="(skill, i) in skills" :key="i">{{ skill }}</li>
          </ul>
        </div>
        <h3>SERVICE</h3>
        <div class="resume_item" v-for="(item, i) in serviceItems" :key="i + 20">
          <!-- fix for annoying vue key system -->
          <h4>{{ item.title }}</h4>
          <h5>{{ item.position_and_time }}</h5>
          <ul>
            <li v-for="(text, j) in item.list" :key="j">{{ text }}</li>
          </ul>
        </div>
        <h3>PERSONAL</h3>
        <div class="personal_item">
          <p>{{ personalData }}</p>
        </div>
      </div>
    </div>
    <div class="ds_info_line">
      <div class="float_wrapper">
        <i class="fa fa-info"></i>
        <h4>
          <strong>Looking for an official copy of my resume?</strong>
          <br>Just contact me and request it!
        </h4>
        <div class="info_line_btn" @click="$router.push({ name: 'Contact' })">
          Take me there
          <i class="fa fa-long-arrow-alt-right"></i>
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
      experienceItems: [
        {
          title: "MILLENIUM AUTO NETWORK",
          position_and_time: "Software Developer, October 2017 - November 2017",
          description:
            "After gaining valuable experience in the industry, I was hired as a temporary developer directly in charge of optimizing the company website for mobile devices. As part of my work I overhauled the current stylesheets and implemented media queries to assist in overall visual and user experience enhancements. I assisted lead developers of their team in the optimization of load time and image rendering on a website that requires numerous pictures to be loaded quickly and effectively. Working with Millennium was an extremely valuable experience both because of the experience I gained and the opportunity to freelance and work remotely for an outside company.",
          list: [
            "Overhauled CSS stylesheets and implemented global media queries making the site accessible and usable to users of all operating systems and devices.",
            "Assisted lead developers in the optimization of load time, image rendering and stylesheet refinement."
          ]
        },
        {
          title: "ROOM CHOICE",
          position_and_time:
            "Frontend Software Developer, March 2017 - November 2018",
          description:
            "At Room Choice, I progressed from having a minimal coding background, to a mastery of several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. Regular completion of these projects validated that quality stems from attention to detail and client-first thinking. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and company website. This gave me the opportunity to test the valuable skills I had learned, as I created robust and clean stylesheets to enhance user experience, to implimenting global media queries to allow users to lease beds and sign contracts from anywhere!",
          list: [
            "Lead role in the rebuilding and bottom-to-top redesign of the frontend of the software system in Vue.js.",
            "Collaborated with company executives in managing product development across 4 software services.",
            "Designed and implemented customizable and exportable financial and operational reports accessible to managers at all clients.",
            "Performed bank reconciliations and user ledger audits with the CFO.",
            "Assisted in the creation and monitoring of the online payment system used by tenants from all clients.",
            "Reported to company executives regularly to communicate goals and progress on current projects."
          ]
        }
      ],
      educationItems: [
        {
          title: "BRIGHAM YOUNG UNIVERSITY",
          position_and_time: "Accounting, August 2017 -",
          list: [
            "3.85 Major GPA with a 4.0 in all Accounting and Finance classes.",
            "Met with professors and Accounting staff frequently as a top prospect in recruiting efforts.",
            "Involved in BYU's Tech Club, PEVC Club, and Corporate Finance Club.",
            "Hand-picked to be a part of the BYU Pre-Ph.D. in Finance program."
          ]
        }
      ],
      serviceItems: [
        {
          title: "THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS",
          position_and_time: "Volunteer Representative, 2016-2017",
          list: [
            "Directed volunteer efforts in Rosario and surrounding areas.",
            "Helped monitor short-term and long-term progress of representatives in the area.",
            "Spent over 100 hours teaching English to help others increase their marketability."
          ]
        }
      ],
      skills: [
        "Vue JS",
        "HTML",
        "CSS (SASS, Stylus)",
        "SQL",
        "Microsoft Excel",
        "Product Management",
        "Spanish",
        "Client Communication"
      ],
      personalData:
        "Recorded and performed live with multiple Grammy award winning musicians in multiple countries on drum set. Eagle scout. Enjoy reading and playing basketball and soccer.",
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
    print() {
      var divId = "resume-content";
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
  z-index: 3;
  .filter_section {
    user-select: none;
    .filter_item {
      color: $text-secondary;
      cursor: pointer;
      overflow: auto;
      padding: 0.5rem 1rem;
      &:hover {
        h4 {
          text-indent: 0.2rem;
          @include mobile {
            text-indent: 0;
          }
        }
      }
      h4 {
        float: left;
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.5rem;
        margin: 0;
        transition: text-indent 0.1s linear;
        @include mobile {
          font-size: 1rem;
        }
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
  z-index: 2;
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
    &.fa-print {
      font-size: 0.8rem;
      right: 4rem;
    }
    @include mobile {
      border-radius: 1.75rem;
      box-shadow: 0 2px 6px 2px rgba($purple, 0.2);
      font-size: 0.9rem;
      line-height: 2.5rem;
      margin: 0.25rem;
      width: 3.5rem;
      @include mobile {
        &.fa-print {
          font-size: 0.95rem;
          right: 5.5rem;
        }
      }
    }
  }
  #resume-content {
    background-color: $white;
    box-shadow: 0 2px 5px 0 rgba($gray-dk, 0.25),
      0 -18px 0px -8px rgba($white, 0.3), 0 -34px 0px -16px rgba($white, 0.2),
      0 -50px 0px -24px rgba($white, 0.1);
    padding: 3rem;
    transition: box-shadow 0.3s ease-out;
    @include mobile {
      padding: 3rem 1.5rem;
    }
    h3 {
      border-bottom: 1px solid $purple;
      color: $purple;
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      @include mobile {
        border-bottom: 1px solid $purple;
        font-size: 1.2rem;
        margin: 2.5rem 0 0.5rem;
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
      h4 {
        color: $text-primary;
        font-size: 1rem;
        font-weight: 600;
        margin: 1.5rem 0 0;
      }
      h5 {
        color: $text-secondary;
        font-size: 0.9rem;
        font-style: italic;
        font-weight: 500;
        margin: 0.2rem 0;
        @include mobile {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
      }
      p {
        color: $text-secondary;
        font-size: 0.9rem;
        font-weight: 400;
        margin: 0.3rem 0;
        text-align: justify;
        @include mobile {
          font-size: 1rem;
          text-align: left;
        }
      }
      ul {
        margin: 0.3rem 0;
        padding-left: 1.5rem;
        li {
          color: $text-secondary;
          font-size: 0.9rem;
          font-weight: 400;
          @include mobile {
            font-size: 1rem;
          }
        }
      }
    }
    .skills_item {
      ul {
        column-count: 3;
        margin: 1rem 0 1rem 6rem;
        padding-left: 1.5rem;
        @include mobile {
          column-count: 1;
          margin: 1rem 0;
        }
        li {
          color: $text-secondary;
          font-size: 0.9rem;
          font-weight: 400;
          @include mobile {
            font-size: 1rem;
          }
        }
      }
    }
    .personal_item {
      p {
        color: $text-secondary;
        font-size: 0.9rem;
        font-weight: 400;
        margin: 1rem 0 1rem 6rem;
        text-align: justify;
        @include mobile {
          font-size: 1rem;
          margin: 1rem 0;
          text-align: left;
        }
      }
    }
  }
}
</style>
