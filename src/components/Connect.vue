<template>
  <div class="footer">
    <div class="wrapper">
      <div class="left">
        <i @click="open('https://www.linkedin.com/in/dallin-stagg')" class="fab fa-linkedin-in"></i>
        <br>
        <i @click="open('https://open.spotify.com/user/1235354586?si=3FS7oFsTRg6j5vZJ5cW7XQ')" class="fab fa-spotify"></i>
      </div>
      <div class="right">
        <div class="form">
          <h3>Contact me</h3>
          <h6>Feel free to contact me about anything from asking a question about a project I've worked on to proposing a business opportunity, or even to just share a joke.</h6>
          <div class="breaker"></div>
          <!-- v-model is not used as it causes an error on mobile devices -->
          <div class="text_inputs">
            <div class="input_item">
              <p>NAME</p>
              <input type="text" :value="name" @input="evt=>name=evt.target.value" placeholder="Name">
            </div>
            <div class="input_item">
              <p>EMAIL</p>
              <input type="text" :value="email" @input="evt=>email=evt.target.value" placeholder="Email address">
            </div>
          </div>
          
          <div class="input_item">
            <p>MESSAGE</p>
            <textarea :value="message" @input="evt=>message=evt.target.value" placeholder="Let me know why you're sending me a message"></textarea>
          </div>
          <div class="toggle_item">
            <div
              class="ds_toggle blue dark left"
              @click="request_resume = !request_resume"
              :class="{ 'toggled': request_resume }"
            >
              <div class="dot"></div>
            </div>
            <p>REQUEST OFFICIAL RESUME</p>
          </div>
          <div class="btn_wrapper" style="text-align: center;">
            <div class="ds_btn grad" :class="{ 'disabled': !inputReady }" @click="go()">Send</div>
          </div>
        </div>
        <h6 class="lower_text">* Please double check the email address you entered. After receiving a submitted message, I will respond to the email provided.</h6>
      </div>
    </div>
    <h6 class="copyright" @click="confetti()">© 2019 - Dallin Stagg</h6>
  </div>
</template>
<script>
import DsBreaker from "./Breaker.vue";
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
      request_resume: false,
      activeTileIndex: 0
    };
  },
  components: {
    dsBreaker: DsBreaker
  },
  computed: {
    inputReady() {
      return this.name && this.email && this.message;
    }
  },
  mounted() {
    setTimeout(this.switchTile, 10000)
  },
  methods: {
    switchTile() {
      if (this.activeTileIndex === 3) {
        this.activeTileIndex = 0
      } else {
        this.activeTileIndex += 1
      }
      setTimeout(this.switchTile, 10000)
    },
    go() {
      if (this.inputReady) {
        // https://script.google.com/macros/s/AKfycbwS78apLRhuzlmigzzMCZH_2Y6opmpWeCqfbc1_unWqEevmsUI/exec
        var contact_url =
          "https://script.google.com/macros/s/AKfycbwS78apLRhuzlmigzzMCZH_2Y6opmpWeCqfbc1_unWqEevmsUI/exec";
        var date = new Date();
        fetch(
          contact_url +
            "?name=" +
            this.name +
            "&email=" +
            this.email +
            "&message=" +
            this.message +
            "&date=" +
            date +
            "&request_resume=" +
            this.request_resume
        );
        this.$confetti.start({
          shape: "rect"
        });
        this.messageSent = true;
        this.clearForm()
        setTimeout(this.stopConfetti, 6000)
      }
    },
    clearForm() {
      this.name = ''
      this.email = ''
      this.message = ''
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
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/global-styles.scss";
.footer {
  background-color: $gray-lt;
  border-top: 4px solid $blue-disabled;
  position: relative;
  .wrapper {
    background-image: linear-gradient(0deg, #212121, $gray-dk,);
    display: grid;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    grid-template-columns: 20rem 30rem;
    grid-gap: 10px;
    padding: 10rem;
    @include mobile {
      grid-template-columns: 1fr;
      padding: 1rem 0 7rem;
    }
    .left {
      text-align: center;
      @include mobile {
        br {
          display: none;
        }
      }
      i {
        border-radius: 50%;
        color: $gray-lt;
        cursor: pointer;
        font-size: 1.75rem;
        line-height: 3.5rem;
        margin: 1rem 0;
        position: relative;
        text-align: center;
        width: 3.5rem;
        @include mobile {
          margin: 5rem 1rem 2rem;
        }
        &:hover::after {
          opacity: 1;
          transform: scale(1);
        }
        &.fa-linkedin-in::after {
          background-color: #0077B5;
        }
        &.fa-spotify::after {
          background-color: #1ED761;
        }
        &::after {
          border-radius: 50%;
          content: "";
          display: inline-block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          transform: scale(.5);
          opacity: 0;
          transition: transform .2s ease-out, opacity .2s ease-out;
          @include mobile {
            transition: none;
            opacity: 1;
            transform: scale(1);
          }
        }
        &::before {
          position: relative;
          z-index: 2;
        }
      }
    }
    .right {
      .form {
        background-color: #343638;
        box-shadow: 0 2px 7px 0 rgba(#111, 0.5);
        box-sizing: border-box;
        margin: 0 auto;
        padding: 1rem 2rem 1.5rem;
        width: 100%;
        z-index: 2;
        @include mobile {
          max-width: 24rem;
          width: calc(100% - 2.5rem);
        }
        h3 {
          color: rgba($white, .7);
          font-size: 2rem;
          font-weight: 400;
        }
        h6 {
          color: rgba($white, .4);
          font-size: .8rem;
          font-weight: 400;
        }
        .text_inputs {
          display: grid;
          align-items: center;
          justify-content: center;
          background-repeat: no-repeat;
          background-size: cover;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 1rem;
          @include mobile {
            display: block;
          }
        }
        .input_item {
          margin: .5rem 0;
          position: relative;
          @include mobile {
            margin: 1rem 0;
          }
          p {
            color: rgba($white, 0.5);
            font-size: 0.6rem;
            font-weight: 400;
            line-height: 1.5rem;
            margin: 0;
            padding: 0 .3rem;
            pointer-events: none;
            @include mobile {
              font-size: 0.8rem;
            }
          }
          input {
            background-color: #3B3D3F;
            border: none;
            border-radius: 2px;
            box-sizing: border-box;
            color: rgba($white, 0.7);
            height: 2.5rem;
            font-family: system-ui;
            font-size: 0.85rem;
            font-weight: 400;
            outline: none;
            text-indent: 0.75rem;
            width: 100%;
            transition: border .1s linear;
            @include mobile {
              font-size: 0.9rem;
              height: 3rem;
            }
          }
          /* Change the white to any color ;) THIS REMOVES YELLOW BACKGROUND ON CHROME AUTOFILL */
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px white inset !important;
          }
          textarea {
            background-color: #3B3D3F;
            border: none;
            border-radius: 2px;
            box-shadow: inset 0 1px 2px 0 rgba(24, 55, 69, 0.1);
            box-sizing: border-box;
            color: rgba($white, 0.7);
            height: 10rem;
            font-family: system-ui;
            font-size: 0.85rem;
            font-weight: 400;
            outline: none;
            padding: .6rem .75rem .5rem;
            resize: none;
            width: 100%;
            @include mobile {
              font-size: 0.9rem;
            }
          }
        }
        .toggle_item {
          overflow: auto;
          padding: .75rem 0 .5rem calc(50% - 7rem);
          width: 14rem;
          .left {
            float: left;
          }
          p {
            color: rgba($white, .6);
            float: left;
            font-size: 0.75rem;
            font-weight: 500;
            line-height: 1.5rem;
            margin: 0;
            letter-spacing: 0.15px;
            text-indent: 0.8rem;
          }
        }
      }
      .lower_text {
        color: rgba($white, .25);
        font-size: .6rem;
        font-weight: 400;
        margin: .75rem 1rem;
        @include mobile {
          margin: .75rem 1.5rem;
        }
      }
    }
  }
  .copyright {
    color: $text-secondary;
    font-size: .9rem;
    font-weight: 500;
    margin: 0;
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    text-align: center;
  }
}

</style>
