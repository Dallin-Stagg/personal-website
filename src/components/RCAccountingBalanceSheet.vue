<template>
<div class="balance_sheet">
  <div class="rc_page_title">
    <div class="pill"></div>
    <h2>Balance Sheet <span>- 12/31/2020</span></h2>
  </div>
  <div class="rc_white_box">
    <div class="upper_section">
      <div class="input_wrapper">
        <div class="item">
          <p>Date</p>
          <input type="date">
        </div>
      </div>
      <div class="button_wrapper">
        <div class="rc_icon_button green">
          <i class="fa fa-search"></i>
        </div>
      </div>
    </div>
    <div class="statement_wrapper">
      <!-- Assets Begin -->
      <h3>Assets</h3>
      <h4>Current Assets</h4>
      <h4 class="sub">Cash and Cash Equivalants</h4>
      <div class="line sub_two" v-for="thing in 2">
        <p>Account Name</p>
        <p>11,000.00</p>
      </div>
      <div class="line sub_two total">
        <p>Total Cash and Cash Equivalents</p>
        <p>55,000.00</p>
      </div>
      <div class="line sub" v-for="thing in 2">
        <p>Account Name</p>
        <p>11,000.00</p>
      </div>
      <div class="line sub total">
        <p>Total Current Assets</p>
        <p>55,000.00</p>
      </div>
      <h4>Fixed Assets</h4>
      <div class="line sub" v-for="thing in 3">
        <p>Account Name</p>
        <p>11,000.00</p>
      </div>
      <div class="line sub total">
        <p>Total Fixed Assets</p>
        <p>55,000.00</p>
      </div>
      <div class="summary">
        <h2>Total Assets</h2>
        <p>12,123.00</p>
      </div>
      <!-- Assets End -->
      <!-- Liabilities and Equity Begin  -->
      <h3>Liabilities and Equity</h3>
      <h4>Liabilities</h4>
      <h4 class="sub">Current Liabilities</h4>
      <div class="line sub_two" v-for="thing in 3">
        <p>Account Name</p>
        <p>11,000.00</p>
      </div>
      <div class="line total sub_two">
        <p>Total Current Liabilities</p>
        <p>55,000.00</p>
      </div>
      <h4 class="sub">Long Term Liabilities</h4>
      <div class="line sub_two" v-for="thing in 3">
        <p>Account Name</p>
        <p>11,000.00</p>
      </div>
      <div class="line total sub_two">
        <p>Total Long Term Liabilities</p>
        <p>55,000.00</p>
      </div>
      <div class="line total sub">
        <p>Total Liabilities</p>
        <p>12,123.00</p>
      </div>
      <h4>Equity</h4>
      <div class="line sub" v-for="thing in 4">
        <p>Account Name</p>
        <p>11,000.00</p>
      </div>
      <div class="line total sub">
        <p>Total Equity</p>
        <p>55,000.00</p>
      </div>
      <div class="summary">
        <h2>Total Liabilities and Equity</h2>
        <p>12,123.00</p>
      </div>
      <!-- Liabilities and Equity End -->
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');
/*
document.documentElement.style.setProperty('--theme-1', '#ffffff')
document.documentElement.style.setProperty('--theme-2', '#f8f9f9')
document.documentElement.style.setProperty('--theme-3', '#f2f3f4')
document.documentElement.style.setProperty(
  '--theme-text-primary',
  '#3f4244'
)
document.documentElement.style.setProperty(
  '--theme-text-secondary',
  '#616466'
)
document.documentElement.style.setProperty(
  '--theme-text-disabled',
  '#8c8e8f'
)
document.documentElement.style.setProperty('--border-gray', '#DBDFE2')

*/
input {
  background-color: #f8f9f9;
  border: 1px solid #DBDFE2;
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: #616466;
  font-family: 'Open Sans', sans-serif;
  font-size: .85rem;
  font-weight: 600;
  outline: none;
  padding: 0 1rem;
  position: relative;
  width: 100%;
  height: 2.25rem;
  transition: box-shadow .2s ease-out;
  z-index: 100;
  &:focus {
    box-shadow: 0px 1px 7px rgba(34, 77, 97, 0.15);
  }
}
  
    
input::placeholder {
  color: #8c8e8f;
  font-style: italic;
  font-weight: 600;
}
  
input::-webkit-inner-spin-button, 
input::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
.rc_page_title {
  margin: 3rem auto 1rem;
  overflow: auto;
  .pill {
    background-color: #30889a;
    border-radius: .3rem;
    float: left;
    height: 2.5rem;
    margin-right: 1rem;
    width: .6rem;
  } 
  h2 {
    color: #3f4244;
    float: left;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;
    span {
      color: #616466;
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
}
  
    
.rc_white_box {
  background-color: #fff;
  border-radius: .3rem;
  box-sizing: border-box;
  box-shadow: 0px 1px 7px rgba(34, 77, 97, 0.15);
  margin: 0 auto;
  padding: 2rem;
}
  
.rc_icon_button {
  border-radius: 1.5rem;
  color: #616466;
  cursor: pointer;
  display: inline-block;
  font-size: .85rem;
  line-height: 2.25rem;
  width: 2.25rem;
  text-align: center;
  transition: box-shadow .15s ease-out, background-color .15s ease-out;
  &:hover {
    box-shadow: 0px 1px 10px rgba(34, 77, 97, 0.3);
  }
  &.green {
    &:hover {
      background-color: rgba(#14CB88, .3);
    }
  }
}
  
    

.balance_sheet {
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto 2rem;
  max-width: calc(100% - 3rem);
  width: 35rem;
  .upper_section {
    height: 4rem;
    overflow: visible;
    .input_wrapper {
      float: left;
      height: 4rem;
      overflow: visible;
      .item {
        float: left;
        margin-right: .5rem;
        p {
          color: #3f4244;
          font-size: .8rem;
          font-weight: 600;
          line-height: 1.75rem;
          margin: 0;
        }
      }
    }
  }
          
  .button_wrapper {
    float: left;
    margin-top: 1.75rem;
    text-align: right;
  }
      
  .statement_wrapper {
    border-top: 1px solid #DBDFE2;
    margin-top: 1.5rem;
    h3 {
      border-bottom: 1px solid #DBDFE2;
      color: #3f4244;
      font-size: 1rem;
      line-height: 2rem;
      margin: 4rem 0 0;
    }
      
    h4 {
      border-bottom: 1px solid #DBDFE2;
      color: #3f4244;
      font-size: .8rem;
      font-weight: 600;
      line-height: 1.25rem;
      margin: 1rem 0 0 .75rem;
      &.sub {
        margin: .5rem 0 0 1.5rem;
      }
    }
  }
        
  .line {
    border-bottom: 1px solid #DBDFE2;
    color: #616466;
    margin: 0 0 0 1.5rem;
    overflow: auto;
    width: calc(100% - 1.5rem);
    &.sub {
      margin: 0 0 0 1.5rem;
      width: calc(100% - 1.5rem);
    }
    &.sub_two {
      margin: 0 0 0 2.5rem;
      width: calc(100% - 2.5rem);
    }
    p {
      font-size: .75rem;
      line-height: 1.6rem;
      margin: 0;
    }
    p:first-child {
      float: left;
    }
    p:last-child {
      float: right;
    }
    &.total {
      border: none;
      color: #3f4244;
      font-weight: 600;
      margin-bottom: .8rem;
      p {
        font-size: .8rem;
        line-height: 2rem;
      }
    }
  }
    
        
  .summary {
    background-color: #f8f9f9;
    border: 1px solid #DBDFE2;
    border-radius: .3rem;
    box-sizing: border-box;
    color: #3f4244;
    margin: 0 0 0 1.5rem;
    overflow: auto;
    padding: 0 .75rem;
    width: calc(100% - 1.5rem);
    &.sub {
      margin: 0rem 0 0 3rem;
      width: calc(100% - 3rem);
    } 
    h2 {
      float: left;
      font-size: .8rem;
      line-height: 1rem;
      margin: .6rem 0;
    } 
    p {
      float: right;
      font-size: .8rem;
      font-weight: 600;
      line-height: 1rem;
      margin: .6rem 0;
    }
  }
}       
</style>
