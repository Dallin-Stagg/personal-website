<template>
  <transition name="contact_slide">
    <div class="contact_me" v-if="popupToDisplay === 'contact'">
      <i class="fa fa-times ds_close_btn" @click="$store.commit('hidePopups')"></i>
      <div class="form">
        <!-- v-model is not used as it causes an error on mobile devices -->
        <h3>Contact me</h3>
        <h6>Feel free to contact me about anything from asking a question about a project I've worked on to proposing a business opportunity, or even to just share a joke.</h6>
        <div class="text_inputs">
          <div class="input_item">
            <p :class="{ 'shift': name }">NAME</p>
            <input placeholder="Name" type="text" :value="name" @input="evt=>name=evt.target.value">
          </div>
          <div class="input_item">
            <p :class="{ 'shift': email }">EMAIL</p>
            <input placeholder="Email address" type="text" :value="email" @input="evt=>email=evt.target.value">
          </div>
        </div>
        <div class="input_item">
          <p :class="{ 'shift': message }">MESSAGE</p>
          <textarea placeholder="Let me know why you're sending me a message" :value="message" @input="evt=>message=evt.target.value"></textarea>
        </div>
        <div class="toggle_item">
          <div
            class="ds_toggle blue left"
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

        <transition name="fade">
          <div class="success_prompt" v-if="messageSent">
            <h4>Thanks for contacting me! I'll be sure to contact you as soon as I am able! In the meantime, enjoy the confetti. :)</h4>
          </div>
        </transition>
      </div>
    </div>  
  </transition>
  
</template>
<script>
export default {
  // to get embed link, go to onedrive.com, find the desired file, right click it, and click embed
  // to download hit this.link.split('embed').join('download')
  name: "Contact",
  data() {
    return {
      messageSent: false,
      name: "",
      email: "",
      message: "",
      request_resume: false
    };
  },
  computed: {
    inputReady() {
      return this.name && this.email && this.message;
    },
    popupToDisplay() {
      return this.$store.state.popupToDisplay;
    }
  },
  methods: {
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
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/global-styles.scss";

.contact_slide-enter-active,
.contact_slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.contact_slide-enter,
.contact_slide-leave-to {
  opacity: 0;
  transform: translateX(10rem);
}


.stick {
  position: sticky;
  top: 1rem;
}

.contact_me {
  border-radius: 2px;
  box-shadow: 0 2px 10px 0px rgba($gray-dk, 0.3),
      -18px 0 0px -8px rgba($white, 0.3), -34px 0 0px -16px rgba($white, 0.2),
      -50px 0 0px -24px rgba($white, 0.1);
  box-sizing: border-box;
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 25rem;
  z-index: 30;
  @include mobile {
    max-width: 24rem;
    width: calc(100% - 2rem);
  }
  .form {
    background-color: $white;
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
      color: $text-primary;
      font-size: 1.75rem;
      font-weight: 400;
      margin: 1rem 0;
    }
    h6 {
      color: $text-secondary;
      font-size: .8rem;
      font-weight: 400;
      margin: 1rem 0;
    }
    .text_inputs {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      @include mobile {
        display: block;
      }
    }
    .input_item {
      margin: .4rem 0;
      position: relative;
      @include mobile {
        margin: 1rem 0;
      }
      p {
        color: $text-secondary;
        font-size: 0.6rem;
        font-weight: 400;
        line-height: 1.4rem;
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
        background-color: #EFF4F9;
        border: none;
        border-radius: 2px;
        box-shadow: inset 0 1px 2px 0 rgba(24, 55, 69, 0.1);
        box-sizing: border-box;
        color: $text-secondary;
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
        background-color: #EFF4F9;
        border: none;
        border-radius: 2px;
        box-shadow: inset 0 1px 2px 0 rgba(24, 55, 69, 0.1);
        box-sizing: border-box;
        color: $text-secondary;
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
        color: $text-secondary;
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
}
</style>
