<template>
  <div>
    <div class="demo_modal">
      <div class="upper_bar"><i class="fa fa-times"></i></div>
      <div class="modal_wrapper">  
        <div class="text_section">
          <div class="overlay"></div>
          <h2>Get <span>Excited!</span></h2>
          <div class="breaker"></div>
          <p>At Room Choice, software demoing is made easy! Just fill out the information form <span class="desktop">on the right</span><span class="mobile">below</span>, and we will contact you shortly to answer any further questions. It's just that easy!</p>
          <h6>"We hope our platform enhances your property management experience."</h6>
          <h5>- The Room Choice Team</h5>
        </div>
        <div class="input_section">
          <input type="text" placeholder="First Name">
          <input type="text" placeholder="Last Name">
          <input type="text" placeholder="Company Name">
          <input type="email" placeholder="Company Email">
          <input type="tel" placeholder="Phone Number">
          <input type="number" placeholder="Number of Beds">
          <div class="btn">Request Demo</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.demo_modal {
  animation: 0.4s ease-out 0s 1 modalLoadIn;
  // box-shadow: 0px 6px 25px rgba(34, 77, 97, 0.3);
  box-shadow: 0px 1px 9px 1px rgba(34, 77, 97, 0.18);
  background-color: white;
  font-family: 'Open Sans', sans-serif; 
  margin-left: 3rem;
  width: 32rem;
  user-select: none;
  pointer-events: none;
  @include mobile {
    margin: 0 auto;
    width: 22rem;
    max-width: calc(100% - 2rem);
  }
  .upper_bar {
    padding: .3rem 0.4rem;
    text-align: right;
    @include mobile {
      padding: 0 .2rem;
    }
    i {
      color: lighten(rgb(38,38,38), 20%);
      cursor: pointer;
      font-size: .9rem;
      line-height: 2rem;
      border-radius: 1rem;
      padding: 0 0.6rem;
      &:hover {
        background-color: rgba(38, 38, 50, 0.1);
      }
      @include mobile {
        font-size: .7rem;
      }
    }
  }
  .modal_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    .text_section {
      background-color: rgb(244, 245, 244);
      border-top-right-radius: 6px;
      box-shadow: 0px 6px 16px rgba(34, 77, 97, 0.2);
      box-sizing: border-box;
      height: 100%;
      padding: 1.5rem 1.5rem 1rem;
      background: url('../assets/images/office-windows.jpg');
      background-size: cover;
      position: relative;
      @include mobile {
        padding: 1rem 1rem .5rem;
      }
      .overlay {
        border-top-right-radius: 6px;
        width: 100%;
        height: 100%;
        z-index: 101;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);

      }
      h2 {
        color: white;
        font-size: 1rem;
        font-weight: 400;
        position: relative;
        z-index: 102;
        @include mobile {
          font-size: .8rem;
        }
        span {
          font-weight: 700;
        }
      }
      .breaker {
        background-color: #23c5d6;
        border-radius: 2px;
        margin: .9rem 0;
        height: 3px;
        width: 4rem;
        position: relative;
        z-index: 102;
        @include mobile {
          margin: .5rem 0;
          width: 3rem;
        }
      }
      p {
        color: white;
        font-size: .75rem;
        font-weight: 400;
        line-height: 1rem;
        position: relative;
        z-index: 102;
        @include mobile {
          font-size: .55rem;
          line-height: .75rem;
        }
        span.desktop {
          @include mobile {
            display: none;
          }
        }
        span.mobile {
          display: none;
          @include mobile {
            display: inline;
          }
        }
      }
      h6 {
        color: white;
        font-weight: 500;
        font-size: .75rem;
        font-style: italic;
        margin: 1.5rem 0 1rem;
        position: relative;
        z-index: 102;
        @include mobile {
          font-size: .5rem;
          margin: 1rem 0 .5rem;
        }
      }
      h5 {
        color: white;
        font-size: .75rem;
        font-weight: 500;
        text-indent: 1rem;
        position: relative;
        z-index: 102;
        @include mobile {
          font-size: .5rem;
          text-indent: .5rem;
        }
      }
    }
    .input_section {
      input {
        border-radius: 0.2rem;
        box-shadow: 0 0 5px 0px rgba(38, 38, 50, 0.12);
        box-sizing: border-box;
        font-size: .75rem;
        outline: none;
        padding-left: .75rem;
        margin: 0.2rem 1rem;
        width: calc(100% - 2rem);
        height: 2.5rem;
        background-color: white;
        border: 1px solid lightgray;
        color: rgb(38,38,38);
        transition: border-color 0.25s;
        @include mobile {
          font-size: .55rem;
          height: 1.75rem;
          margin: .1rem .5rem;
          padding-left: .5rem;
          width: calc(100% - 1rem);
        }
      }
      .btn {
        background-image: linear-gradient(255deg, #23c5d6, #18b3d5);
        color: white !important;
        font-size: .7rem;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 3px;
        padding: .7rem 1rem;
        letter-spacing: 1px;
        max-width: 12rem;
        margin: 1rem auto;
        text-align: center;
        cursor: pointer;
        @include mobile {
          font-size: .5rem;
          margin: .5rem auto;
          padding: .5rem 2rem;
          width: 5rem;
        }
      }
    }
  }
}
</style>
