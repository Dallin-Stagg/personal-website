<template>
  <div class="bank_feed">
    <div class="card" @click="toggleTheme()">
      <h6>Current Balance</h6>
      <h2>$26,127.36</h2>
      <h5>
        <span v-for="thing in 3">
          <i class="fa fa-circle" v-for="thing in 4"></i>
        </span>
        
        7521
      </h5> <!-- <span>•••• •••• ••••</span> -->
      <p>Dallin Stagg</p>
      <div class="visa_img"></div>
    </div>
    <h2>Pending</h2>
    <div class="item">
      <div class="img venmo"></div>
      <div>
        <h5>Venmo Transfer</h5>
        <p>5/14/19</p>
      </div>
      <div class="right_side">
        <h4 class="green">$25.00</h4>
      </div>
    </div>
    <div class="item">
      <div class="img amazon"></div>
      <div>
        <h5>Amazon</h5>
        <p>5/14/19</p>
      </div>
      <div class="right_side">
        <h4>$192.67</h4>
      </div>
    </div>
    <div class="item">
      <div class="img starbucks"></div>
      <div>
        <h5>Starbucks</h5>
        <p>5/13/19</p>
      </div>
      <div class="right_side">
        <h4>$4.81</h4>
      </div>
    </div>
    <h2>Completed</h2>
    <div class="item">
      <div class="img uber"></div>
      <div>
        <h5>Uber</h5>
        <p>5/10/19</p>
      </div>
      <div class="right_side">
        <h4>$13.36</h4>
        <h4 class="status">Uncategorized</h4>
      </div>
    </div>
    <div class="item">
      <i class="fa fa-arrow-down red"></i>
      <div>
        <h5>Withdrawal</h5>
        <p>5/9/19</p>
      </div>
      <div class="right_side">
        <h4 class="red">$200.00</h4>
      </div>
    </div>
    <div class="item">
      <div class="img spotify"></div>
      <div>
        <h5>Spotify</h5>
        <p>5/7/19</p>
      </div>
      <div class="right_side">
        <h4>$16.03</h4>
      </div>
    </div>
    <div class="item">
      <div class="img mcdonalds"></div>
      <div>
        <h5>McDonald's</h5>
        <p>5/3/19</p>
      </div>
      <div class="right_side">
        <h4>$7.53</h4>
      </div>
    </div>
    <div class="item">
      <i class="fa fa-arrow-up green"></i>
      <div>
        <h5>Deposit</h5>
        <p>5/1/19</p>
      </div>
      <div class="right_side">
        <h4 class="green">$485.98</h4>
      </div>
    </div>
    <div class="item" v-for="(alert, i) in 12">
      <i class="fa fa-arrow-up green"></i>
      <div>
        <h5>Venmo</h5>
        <p>5/1/19</p>
      </div>
      <div class="right_side">
        <h4 class="green">$485.98</h4>
        <h4 class="status">Uncategorized</h4>
      </div>
    </div>
    <h6>Designed by Dallin Stagg</h6>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleTheme() {
      this.$store.commit('toggleTheme')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.bank_feed {
  background-color: var(--background-2);
  font-family: 'Open Sans', sans-serif; 
  padding-top: 4.5rem;
  max-width: 25rem;
  margin: 0 auto;
  @include mobile {
    max-width: 100%;
  }
  .card {
    background-color: var(--accent-2);
    border-radius: .8rem;
    box-shadow: 0px 6px 25px rgba(34, 77, 97, 0.4);
    box-sizing: border-box;
    margin: .5rem auto;
    padding: 1rem;
    position: relative;
    width: calc(100% - 2rem);
    h6 {
      color: rgba($white, .5);
      font-size: .75rem;
      margin: .5rem;
      padding: 0;
      text-align: left;
    }
    h2 {
      color: $white;
      font-size: 1.6rem;
      margin: .5rem;
      text-indent: 0;
    }
    h5 {
      color: rgba($white, .5);
      font-size: .9rem;
      margin: 1.75rem .5rem;
      span {
        color: $white;
        letter-spacing: .25rem;
        margin-right: .7rem;
        position: relative;
        top: -.2rem;
        i {
          font-size: .5rem;
        }
      }
    }
    p {
      color: rgba($white, .8);
      font-size: .8rem;
      margin: 3rem .5rem .5rem;
    }
    .visa_img {
      background-image: url(../assets/images/visa.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: .75rem;
      width: 2.5rem;
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;
    }
  }
}
h2 {
  color: $text-primary;
  font-size: 1rem;
  margin: 1.5rem 0 .5rem;
  text-indent: 1rem;
}
.item {
  background-color: $white;
  border-radius: 4px;
  box-shadow: 0px 6px 16px rgba(34, 77, 97, 0.2);
  display: grid;
  align-items: center;
  justify-items: start;
  grid-template-columns: 6fr 18fr 8fr;
  height: 3.875rem;
  margin: .45rem auto;
  position: relative;
  max-width: 25rem;
  width: calc(100% - 2rem);
  .img {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0px 3px 7px rgba(34, 77, 97, 0.2);
    height: 2.4rem;
    margin-left: .875rem;
    width: 2.4rem;
    &.venmo {
      background-image: url(../assets/images/venmo.png);
    }
    &.amazon {
      background-image: url(../assets/images/amazon.jpg);
    }
    &.starbucks {
      background-image: url(../assets/images/starbucks.png);
    }
    &.uber {
      background-image: url(../assets/images/uber.png);
    }
    &.mcdonalds {
      background-image: url(../assets/images/mcdonalds.png);
    }
    &.spotify {
      background-image: url(../assets/images/spotify.png);
    }
  }
  i {
    border-radius: 50%;
    box-shadow: 0px 3px 7px rgba(34, 77, 97, 0.2);
    line-height: 2.4rem;
    margin-left: 1rem;
    text-align: center;
    width: 2.4rem;
    &.green {
      color: $green;
    }
    &.red {
      background-color: rgba(#ff455c, .05);
      color: #ff455c;
    }
  }
  h5 {
    font-size: .9rem;
    margin: 0;
  }
  p {
    color: $text-secondary;
    font-size: .75rem;
    font-weight: 500;
    margin: 0;
  }
  .right_side {
    box-sizing: border-box;
    padding-right: 1rem;
    text-align: right;
    width: 100%;
    h4 {
      color: $text-secondary;
      font-size: .85rem;
      margin: 0;
      &.green {
        color: $green;
      }
      &.red {
        color: $red;
      }
    }
    .status {
      color: $purple;
      font-size: .6rem;
      margin-top: .1rem;
      text-transform: uppercase;
    }
  }
}
h6 {
  color: $text-secondary;
  margin-bottom: 0;
  padding-bottom: 5rem;
  text-align: center;
}

</style>
