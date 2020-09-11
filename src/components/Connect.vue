<template>
  <div style="padding-top: 8rem;">
    <div class="footer">
      <div class="contact_section">
        <div class="form">
          <div class="triangle"></div>
          <h2 class="ds_section_header">
            <span>Contact me.</span>
          </h2>
          <div class="input_wrapper">
            <input type="text" :value="name" @input="evt=>name=evt.target.value" placeholder="Name">
            <input type="text" :value="email" @input="evt=>email=evt.target.value" placeholder="Email">
            <input type="text" :value="company" @input="evt=>company=evt.target.value" placeholder="Company">
            <input type="text" :value="message" @input="evt=>message=evt.target.value" placeholder="Message">
          </div>
          <div class="ds_btn" @click="go()">
            <div>Send Message</div>
            <i class="fa fa-paper-plane"></i>
          </div>
        </div>
        <div class="themes_wrapper">
          <div class="tiles">
            <div class="item" v-for="(tile, i) in themes" :key="i" :class="{ 'active': activeTileIndex === i }" @click="updateTheme(tile, i)">
              <div class="color_wrapper">
                <div class="swatch" :style="{ backgroundColor: tile.ac1 }"></div>
                <div class="swatch" :style="{ backgroundColor: tile.bg1 }"></div>
                <div class="swatch" :style="{ backgroundColor: tile.bg3 }"></div>
                <div class="swatch" :style="{ backgroundColor: tile.ac2 }"></div>
                <div class="swatch" :style="{ backgroundColor: tile.bg4 }"></div>
                <div class="swatch" :style="{ backgroundColor: tile.ac3 }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_breaker center"></div>
      <div class="lower_section">
        <h3>Created by <span @click="confetti()">Dallin Stagg</span></h3>
        <h4>© 2020 - Dallin Stagg. All Rights Reserved</h4>
        <div class="social_link_wrapper">
          <i @click="open('https://www.linkedin.com/in/dallin-stagg')" class="fab fa-linkedin-in"></i>
          <i @click="open('https://open.spotify.com/user/1235354586?si=3FS7oFsTRg6j5vZJ5cW7XQ')" class="fab fa-spotify"></i>
          <i @click="open('https://www.instagram.com/dallinstagg/')" class="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // to get embed link, go to onedrive.com, find the desired file, right click it, and click embed
  // to download hit this.link.split('embed').join('download')
  name: "Footer",
  data() {
    return {
      messageSent: false,
      name: "",
      email: "",
      message: "",
      company: "",
      request_resume: false,
      activeTileIndex: 0,
      themes: [
        {
          bg1: '#ffffff',
          bg2: '#f7f7f9',
          bg3: '#d3dde5',
          bg4: '#272728',
          bg5: '#212123',
          ac1: '#0073FC',
          ac2: '#0056bd',
          ac3: '#FFB100',
          theme: 'light'
        },
        {
          bg1: '#2A2A2D',
          bg2: '#272728',
          bg3: '#343438',
          bg4: '#272728',
          bg5: '#212123',
          ac1: '#00AA47',
          ac2: '#008738',
          ac3: '#FFB100',
          theme: 'dark'
        },
        {
          bg1: '#ffffff',
          bg2: '#f7f7f9',
          bg3: '#c1c8e4',
          bg4: '#8860d0',
          bg5: '#8860d0',
          ac1: '#5680e9',
          ac2: '#5680e9',
          ac3: '#FFB100'
        },
        {
          bg1: '#f7f7f9',
          bg2: '#f7f7f9',
          bg3: '#8265A7',
          bg4: '#2a1b3d',
          bg5: '#2a1b3d',
          ac1: '#d83f87',
          ac2: '#d83f87',
          ac3: '#FFB100'
        }
      ]
    };
  },
  computed: {
    inputReady() {
      return this.name && this.email && this.message && this.company;
    }
  },
  mounted() {
    this.confetti()
  },
  methods: {
    go() {
      if (this.inputReady) {
        // https://script.google.com/macros/s/AKfycbwFwMXn1KLc7xBvEU4JA3BaFKjY5SgXDWO-I5M2At4I2ihxcohm/exec
        var contact_url =
          "https://script.google.com/macros/s/AKfycbwFwMXn1KLc7xBvEU4JA3BaFKjY5SgXDWO-I5M2At4I2ihxcohm/exec";
        fetch(
          contact_url +
            "?name=" +
            this.name +
            "&email=" +
            this.email +
            "&message=" +
            this.message +
            "&company=" +
            this.company +
            "&request_resume=" +
            this.request_resume
        );
        this.$confetti.start({
          shape: "rect"
        });
        this.messageSent = true;
        this.clearForm()
        setTimeout(this.stopConfetti, 7000)
      } else {
        alert("Please fill out the entire form before submitting.")
      }
    },
    clearForm() {
      this.name = ''
      this.email = ''
      this.message = ''
      this.company = ''
    },
    stopConfetti() {
      this.messageSent = false
      this.$confetti.stop();
    },
    open(link) {
      window.open(link, '_blank');
    },
    confetti() {
      this.$confetti.start({
        shape: "rect"
      });
      setTimeout(this.stopConfetti, 3000)
    },
    updateTheme(tile, index) {
      if (index !== this.activeTileIndex) {
        this.activeTileIndex = index
        /* let alert = {
          text: error.response.data.detail,
          type: 'warning',
          key: Math.round(Math.random() * 10000)
        } */
        this.$store.commit('updateTheme', tile)
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/global-styles.scss";
.section_breaker {
  border-top: 1px solid var(--bg-3);
  border-bottom: 1px solid var(--bg-3);
  height: 5px;
  &.left {
    margin-right: 30%;
    width: 70%;
  }
  &.right {
    margin-left: 30%;
    width: 70%;
  }
  &.center {
    margin: 0 auto;
    max-width: calc(100% - 3rem);
    width: 72rem;
    @include mobile {
      max-width: calc(100% - 2rem);
      width: calc(100% - 2rem);
    }
  }
}
.footer {
  background-color: var(--bg-2);
  border-top: 1px solid rgba(#dbdfe2, 0.4);
  .contact_section {
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    position: relative;
    top: -4.4rem;
    left: 0;
    max-width: calc(100% - 3rem);
    width: 72rem;
    @include mobile {
      grid-template-columns: 1fr;
      max-width: calc(100% - 2rem);
      width: calc(100% - 2rem);
    }
    .form {
      background-color: var(--bg-1);
      border-radius: 3px;
      box-shadow: 1px 4px 25px 2px rgba(0,0,0, 0.05),
      0px 3px 4px 2px rgba(0, 0, 0, 0.05);
      padding: 2.5rem 3.4rem;
      position: relative;
      @include mobile {
        padding: 3rem 2.5rem;
      }
      .triangle {
        width: 0;
        height: 0;
        border-bottom: 1.2rem solid transparent;
        border-right: 1.2rem solid transparent;
        border-top: 1.2rem solid var(--bg-3);
        border-left: 1.2rem solid var(--bg-3);
        position: absolute;
        top: 8px;
        left: 8px;
        z-index: 1;
      }
      .input_wrapper {
        padding: .75rem 0 1.5rem;
        input {
          background-color: var(--bg-1);
          border: none;
          border-bottom: 1px solid var(--bg-3);
          color: var(--text-1);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.2px;
          line-height: 2.3rem;
          margin: .7rem 0;
          outline: none;
          text-indent: 0.1rem;
          width: 100%;
          transition: 0.2s ease-out border-color;
          &::placeholder {
            color: var(--text-2);
            font-style: italic;
            font-weight: 400;
          }
          @include mobile {
            font-size: 1.1rem;
          }
        }
      }
      input {
        border: none;
        border-bottom: 1px solid var(--bg-2);
        color: $text-secondary;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.2px;
        line-height: 2rem;
        margin: 1rem 0;
        outline: none;
        text-indent: 0.1rem;
        width: 100%;
        transition: 0.2s ease-out border-color;
        &::placeholder {
          color: var(--text-2);
          font-style: italic;
          font-weight: 400;
        }
      }
    }
    .themes_wrapper {
      display: none;
      //display: grid;
      align-content: center;
      justify-content: center;
      grid-template-columns: 1fr;
      @include mobile {
        margin-top: 3rem;
      }
      .tiles {
        margin: 0 auto;
        .item {
          box-shadow: 0px 0px 1px rgba(#38383b, 0.45);
          border-radius: 6px;
          cursor: pointer;
          display: inline-block;
          overflow: hidden;
          margin: .75rem;
          width: 4rem;
          height: 6rem;
          transition: transform .3s ease-in-out, margin .3s ease-in-out;
          &.active {
            transform: scale(1.2);
          }
          .color_wrapper {
            display: grid;
            align-content: center;
            justify-content: center;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            height: 100%;
            .swatch {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .lower_section {
    margin: 0 auto;
    max-width: calc(100% - 2rem);
    padding: 1.5rem 0 8rem;
    position: relative;
    width: 72rem;
    @include mobile {
      padding: 1.5rem 0 8rem;
      width: calc(100% - 2rem);
    }
    h3 {
      color: var(--text-2);
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.2px;
      line-height: 1.7rem;
      margin: 0;
      span {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    h4 {
      color: var(--text-2);
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.2px;
      line-height: 1.7rem;
      margin: 0;
      opacity: .7;
    }
    .social_link_wrapper {
      position: absolute;
      top: 2rem;
      right: 0;
      @include mobile {
        left: 0;
        top: 6rem;
      }
      i {
        border-radius: 50%;
        box-shadow: 0px 2px 7px rgba(34, 77, 97, 0.3);
        color: white;
        cursor: pointer;
        font-size: 1.3rem;
        line-height: 2.3rem;
        margin-left: 0.4rem;
        text-align: center;
        width: 2.3rem;
        @include mobile {
          border-radius: 0.4rem;
          font-size: 1.5rem;
          line-height: 3rem;
          margin: 0 1rem 0 0;
          width: 5rem;
        }
        &.fa-spotify {
          background-color: #1ed761;
        }
        &.fa-linkedin-in {
          background-color: #0077b5;
        }
        &.fa-instagram {
          background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
          font-size: 1.5rem;
        }
      }
    }
  }
}

</style>
