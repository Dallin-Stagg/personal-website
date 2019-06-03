<template>
<div class="balance_sheet">
  <div class="rc_white_box">
    <div class="statement_wrapper">
      <!-- Assets Begin -->
      <h4>Current Assets</h4>
      <div class="line sub">
        <p>Cash and cash equivalents</p>
        <p>7,781</p>
      </div>
      <div class="line sub">
        <p>Accounts Receivables, net</p>
        <p>6,768</p>
      </div>
      <div class="line sub">
        <p>Inventory</p>
        <p>43,803</p>
      </div>
      <div class="line sub">
        <p>Prepaid expenses</p>
        <p>1,551</p>
      </div>
      <div class="line sub total">
        <p>Total Current Assets</p>
        <p>59,903</p>
      </div>
      <h4>Fixed Assets</h4>
      <div class="line sub">
        <p>Property and equipment</p>
        <p>165,825</p>
      </div>
      <div class="line sub">
        <p>Accumulated depreciation</p>
        <p>(51,896)</p>
      </div>
      <div class="line sub total">
        <p>Total Fixed Assets</p>
        <p>113,929</p>
      </div>
      <div class="summary">
        <h2>Total Assets</h2>
        <p>173,832</p>
      </div>
      <!-- Assets End -->
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
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

.balance_sheet {
  background-color: #fff;
  border-radius: .3rem;
  box-sizing: border-box;
  box-shadow: 0px 1px 7px rgba(34, 77, 97, 0.15);
  padding: 2rem 1.75rem;
  font-family: 'Open Sans', sans-serif;
  margin: 0 0 2rem 5rem;
  max-width: calc(100% - 3rem);
  width: 33rem;
  @include mobile {
    margin: 0 auto;
    padding: 1.25rem 1.25rem 1.5rem;
    width: calc(100% - 3rem);
  }
      
  .statement_wrapper {
    h3 {
      color: #3f4244;
      font-size: 1.1rem;
      line-height: 2rem;
      margin: .5rem 0 1.5rem;
    }
      
    h4 {
      border-bottom: 1px solid #DBDFE2;
      color: #3f4244;
      font-size: .8rem;
      font-weight: 600;
      line-height: 1.25rem;
      margin: .75rem 0 0 .25rem;
      &.sub {
        margin: .5rem 0 0 1.5rem;
      }
    }
  }
        
  .line {
    border-bottom: 1px solid #DBDFE2;
    color: #616466;
    margin: 0;
    overflow: auto;
    width: calc(100% - 1.5rem);
    &.sub {
      margin: 0 0 0 1rem;
      width: calc(100% - 1rem);
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
      font-weight: 600;
      margin-bottom: 1rem;
      p {
        font-size: .75rem;
        line-height: 1.5rem;
      }
    }
  }
    
        
  .summary {
    background-color: #f8f9f9;
    border: 1px solid #DBDFE2;
    border-radius: .3rem;
    box-shadow: inset 0px 1px 5px rgba(34, 77, 97, 0.05);
    box-sizing: border-box;
    color: #616466;
    font-weight: 600;
    margin: 0 0 0 .25rem;
    overflow: auto;
    padding: 0 .75rem;
    width: calc(100% - .25rem);
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
      line-height: 1rem;
      margin: .6rem 0;
    }
  }
}       
</style>
