<template>
  <div class="footer">
    <dsBreaker mainColor="light" bgColor="dark"></dsBreaker>
    <div class="wrapper">
      <div class="left">
        <div class="tiles">
          <div class="item" :class="{ 'active': activeTileIndex === 0 }"><i class="fas fa-book"></i>
            <div class="text_wrapper">
              <h4>Accounting</h4>
              <p>Learning to analyze a business, making decisions based on real value, and gaining an appreciation for a meticulous attention to detail are skills that have transformed the way I operate!</p>
            </div>
          </div>
          <div class="item" :class="{ 'active': activeTileIndex === 1 }"><i class="fas fa-code"></i>
            <div class="text_wrapper">
              <h4>Development</h4>
              <p>I once decided my business skillset needed a taste of tech. I then taught myself to code and began to design and develop sites just like this one from the ground up! Ask me about my work!</p>
            </div>
          </div>
          <div class="item" :class="{ 'active': activeTileIndex === 2 }"><i class="fas fa-paint-brush"></i>
            <div class="text_wrapper">
              <h4>Design</h4>
              <p>Everyone needs a way to express themselves artistically. Being able to design something my own way from the scratch gives me the opportunity to be proud of something that only I touched.</p>
            </div>
          </div>
          <div class="item" :class="{ 'active': activeTileIndex === 3 }"><i class="fas fa-music"></i>
            <div class="text_wrapper">
              <h4>Music</h4>
              <p>From being honored as the All-State drummer for the state of Utah to performing with Grammy Award winning musicians internationally, music has always been a big part of who I am.</p>
            </div>
          </div>
        </div>
        
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
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/global-styles.scss";
.footer {
  background-color: $gray-lt;
  padding-top: 2rem;
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
      .tiles {
        position: relative;
        // transform: rotate(-35deg) skew(20deg,5deg);
        transform: rotate(-1deg) skew(0deg,3deg);
        width: calc(100% - 2rem);
        @include mobile {
          margin: 3.5rem auto 4.5rem;
          width: calc(100% - 3.5rem);
        }
        .item {
          background: linear-gradient(-60deg, $purple-dk, #3a66c4, $blue, $mint);
          color: $white;
          cursor: pointer;
          filter: brightness(.6);
          text-align: center;
          height: 3.5rem;
          width: 3.5rem;
          line-height: 3.5rem;
          position: relative;
          display: block;
          text-decoration: none;
          box-shadow: -1rem 1rem 7px rgba(34, 77, 97, 0.2);
          transition: all .25s linear;
          .text_wrapper {
            box-sizing: border-box;
            text-align: left;
            padding: 0rem .5rem .5rem 1rem;
            position: absolute;
            left: 3.5rem;
            top: 0;
            width: calc(18rem - 3.5rem);
            opacity: 0;
            transition: opacity .25s linear;
            @include mobile {
              width: calc(100vw - 4rem - 3.5rem);
            }
            h4 {
              color: rgba($white, .8);
              font-size: .95rem;
              font-weight: 400;
              line-height: 1.75rem;
              margin: 0;
            }
            p {
              color: rgba($white, .5);
              font-size: .75rem;
              font-weight: 300;
              line-height: 1.1rem;
              margin: .2rem 0;
            }
          }
          &.active {
            transform: translate(.9em, -.9em);
            transition: all .25s linear;
            box-shadow: -2rem 2rem 14px rgba(34, 77, 97, 0.4);
            filter: brightness(1);
            .text_wrapper {
              opacity: 1;
            }
            &:before, 
            &:after { 
              transition: all .25s linear; 
            }
            
            &:before {
              width: 1rem;
              top: .5rem;
              left: -1rem;
            }
            
            &:after {
              width: 1rem;
              bottom: -2.25rem;
              left: .75rem;
              height: 3.5rem;
            }
          }
          
          &:before, 
          &:after {
            content: '';
            position: absolute;
            transition: all .25s linear;
            width: .5em;
          }

          &:after {
            background: linear-gradient(-240deg, $purple-dk, #3a66c4, $blue, $mint);
            height: 3.5rem;
            bottom: -2rem;
            left: 1.25rem;
            transform: rotate(90deg) skew(0,45deg);
          }
          
          &:before {
            background: $mint;
            height: 3.5rem;
            top: .25rem;
            left: -.5rem;
            transform: skewY(-45deg);
          }
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
            transition: font-size 0.1s ease-out, padding 0.1s ease-out,
              top 0.1s ease-out, left 0.1s ease-out;
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
}

</style>
