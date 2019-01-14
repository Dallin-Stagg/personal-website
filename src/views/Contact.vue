<template>
  <div class="contact_me">
    <div class="outer_wrapper">
      <div class="content">
        <div class="input_item">
          <p :class="{ 'shift': name }">NAME</p>
          <input ref="autofocus" type="text" v-model="name" required>
        </div>
        <div class="input_item">
          <p :class="{ 'shift': email }">EMAIL</p>
          <input type="email" v-model="email" required>
          <!-- FIX FOR MOBILE
						
						 <input type='text'
        :value='message1'
        @input='evt=>message1=evt.target.value'
          >-->
        </div>
        <div class="input_item">
          <p :class="{ 'shift': message }">MESSAGE</p>
          <textarea v-model="message" required></textarea>
        </div>
        <div class="toggle_item">
          <div
            class="ds_toggle purple left"
            @click="request_resume = !request_resume"
            :class="{ 'toggled': request_resume }"
          >
            <div class="dot"></div>
          </div>
          <p>REQUEST OFFICIAL RESUME</p>
        </div>
        <div class="btn_wrapper" style="text-align: center;">
          <div class="ds_btn green" :class="{ 'disabled': !inputReady }" @click="go()">Send</div>
        </div>

        <transition name="fade">
          <div class="success_prompt" v-if="messageSent">
            <h4>Thanks for contacting me! I'll be sure to contact you as soon as I am able! In the meantime, enjoy the confetti. :)</h4>
          </div>
        </transition>
      </div>
    </div>
  </div>
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
  mounted() {
    this.$refs.autofocus.focus();
  },
  computed: {
    inputReady() {
      return this.name && this.email && this.message;
    }
  },
  methods: {
    go() {
      if (this.inputReady) {
        // https://script.google.com/macros/s/AKfycbwS78apLRhuzlmigzzMCZH_2Y6opmpWeCqfbc1_unWqEevmsUI/exec
        /* var contact_url =
					'https://script.google.com/macros/s/AKfycbwS78apLRhuzlmigzzMCZH_2Y6opmpWeCqfbc1_unWqEevmsUI/exec'
				var date = new Date()
				fetch(
					contact_url +
					'?name=' +
					this.name +
					'&email=' +
					this.email +
					'&message=' +
					this.message +
					'&date=' +
					date +
					'&request_resume=' +
					this.request_resume
				) */
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

.contact_me {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  @include mobile {
    display: block;
    overflow-y: auto;
  }
  .outer_wrapper {
    box-shadow: 0 1px 6px 0px rgba($gray-dk, 0.25),
      0 -18px 0px -8px rgba($white, 0.25), 0 -34px 0px -16px rgba($white, 0.2),
      0 -50px 0px -24px rgba($white, 0.15);
    box-sizing: border-box;
    position: relative;
    width: 20rem;
    @include mobile {
      margin: 6rem auto 10rem;
      width: calc(100% - 1rem);
    }
    .content {
      background-color: $white;
      padding: 2.5rem 1rem 1rem;
      .input_item {
        margin: 1rem 0;
        position: relative;
        p {
          background-color: $white;
          color: rgba($gray-dk, 0.8);
          font-size: 0.8rem;
          font-weight: 600;
          line-height: 1.5rem;
          top: 0.5rem;
          left: 0.95rem;
          margin: 0;
          padding: 0;
          pointer-events: none;
          position: absolute;
          transition: font-size 0.1s ease-out, padding 0.1s ease-out,
            top 0.1s ease-out, left 0.1s ease-out;
          @include mobile {
            top: 0.75rem;
          }
          &.shift {
            font-size: 0.7rem;
            padding: 0 0.3rem;
            top: -0.8rem;
            left: 0.7rem;
          }
        }
        input {
          border: 1px solid $gray-border;
          border-radius: 0.5rem;
          box-shadow: inset 0 2px 5px 0 rgba(24, 55, 69, 0.1);
          box-sizing: border-box;
          color: $text-primary;
          height: 2.5rem;
          font-family: system-ui;
          font-size: 0.85rem;
          font-weight: 500;
          outline: none;
          text-indent: 0.8rem;
          width: 100%;
          &:focus {
            border: 1px solid $purple;
            box-shadow: inset 0 2px 6px 0 rgba($purple, 0.25);
          }
          @include mobile {
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
          border: 1px solid $gray-border;
          border-radius: 0.5rem;
          box-sizing: border-box;
          box-shadow: inset 0 2px 5px 0 rgba(24, 55, 69, 0.1);
          color: $text-primary;
          height: 10rem;
          font-family: system-ui;
          font-size: 0.85rem;
          font-weight: 500;
          resize: none;
          outline: none;
          padding: 0.7rem 0.8rem;
          width: 100%;
          &:focus {
            border: 1px solid $purple;
            box-shadow: inset 0 2px 6px 0 rgba($purple, 0.25);
          }
          @include mobile {
            height: 12rem;
            padding: 0.9rem 0.8rem;
          }
        }
      }
      .toggle_item {
        overflow: auto;
        padding: 0 0 1rem 2rem;
        .left {
          float: left;
        }
        p {
          color: $text-secondary;
          float: left;
          font-size: 0.8rem;
          font-weight: 600;
          line-height: 1.5rem;
          margin: 0;
          text-indent: 0.8rem;
        }
      }
      .success_prompt {
        border-radius: 0.5rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1.5rem;
        position: absolute;
        top: 20px;
        left: 0;
        background-color: $white;
        width: 100%;
        height: calc(100% - 40px);
        z-index: 15;
        h4 {
          color: $text-secondary;
          font-size: 1.3rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
