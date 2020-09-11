<template>
  <div class="portfolio_section">
    <h4>Portfolio</h4>
    <h1 class="watermark">Portfolio</h1>
    <div id="card_wrapper">
      <div @click="clickCard(card.id)" class="card" :id="'card-' + card.id" v-for="card in cards" :key="card.id" :class="[{ 'active': card.id === activeCardId }, card.class]">
        <div class="banner" :class="card.class"></div>
        <h3>{{ card.title }}</h3>
        <p>Case study coming soon <i class="fa fa-long-arrow-alt-right"></i></p>
      </div>
    </div>
    <div class="arrows">
      <i class="fa fa-chevron-left" @click="toggle('left')"></i>
      <i class="fa fa-chevron-right" @click="toggle('right')"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      activeCardId: 1,
      cards: [
        {
          id: 1,
          title: "ExxonMobil",
          class: "exxon"
        },
        {
          id: 2,
          title: "Hall Labs",
          class: "hall"
        },
        {
          id: 3,
          title: "Utility Manager",
          class: "redstone"
        },
        {
          id: 4,
          title: "Dr. Allen Ortho",
          class: "ortho"
        },
        {
          id: 5,
          title: "Manager Portal",
          class: "manager"
        },
        {
          id: 6,
          title: "Millenium Auto",
          class: "auto"
        },
        {
          id: 7,
          title: "Student Portal",
          class: "student"
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    toggle(direction) {
      if (direction === 'left' && this.activeCardId !== 1) {
        this.activeCardId -= 1;
        this.scroll()
      } else if (direction === 'right' && this.activeCardId !== this.cards.length) {
        this.activeCardId += 1;
        this.scroll()
      } else if (direction === 'right' & this.activeCardId === this.cards.length) {
        this.activeCardId = 1;
        this.scroll()
      }
    },
    clickCard(id) {
      this.activeCardId = id
      this.scroll()
    },
    scroll() {
      var myElement = document.getElementById('card-' + this.activeCardId);
      var leftPos = myElement.offsetLeft;
      document.getElementById('card_wrapper').scrollLeft = leftPos - 32;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global-styles.scss";
.portfolio_section {
  background-color: var(--bg-3);
  padding-bottom: 1rem;
  overflow: hidden;
  width: 100%;
  position: relative;
  h4 {
    color: var(--text-1);
    font-size: 1.5rem;
    margin: 8rem 0 0;
    text-indent: 2rem;
  }
  .watermark {
    color: rgba(white, .25);
    font-size: 30rem;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%) rotate(-8deg);
    @include mobile {
      font-size: 24rem;
      transform: translate(-50%, -50%) rotate(-20deg);
    }
  }
  #card_wrapper {
    padding: 0 90rem 5rem 0;
    overflow: hidden;
    scroll-behavior: smooth;
    white-space: nowrap;
    position: relative;
    z-index: 2;
    @include mobile {
      // overflow: scroll;
      // -webkit-overflow-scrolling: touch;
      padding-right: 5rem;
      width: 100%;
      padding-bottom: 6rem;
    }
    .card {
      background-color: var(--bg-1);
      border-radius: .5rem;
      box-shadow: 6px 6px 10px 1px  rgba(5, 5, 10, 0.15);
      display: inline-block;
      overflow: hidden;
      position: relative;
      width: 19rem;
      height: 24rem;
      margin: 1rem 0 1rem 2rem;
      transform: scale(.9);
      transition: transform ease-in-out .2s;
      @include mobile {
        transform: scale(1);
        height: 26rem;
        width: 18rem;
      }
      .banner {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: .5rem;
        height: 18rem;
        width: 100%;
        @include mobile {
          height: 19rem;
        }
        &.exxon {
          background-image: url(../assets/images/ExxonMobil.jpg);
        }
        &.hall {
          background-image: url(../assets/images/diamond.jpg);
        }
        &.redstone {
          background-image: url(../assets/images/utilities.jpg);
        }
        &.ortho {
          background-image: url(../assets/images/orthodontics.jpg);
        }
        &.manager {
          background-image: url(../assets/images/manager.webp);
        }
        &.auto {
          background-image: url(../assets/images/cars.jpg);
        }
        &.student {
          background-image: url(../assets/images/student.png);
        }
      }
      h3 {
        color: var(--text-1);
        font-size: 1.25rem;
        margin: 1.2rem 1rem .25rem;
        @include mobile {
          font-size: 1.3rem;
          margin-bottom: .5rem;
        }
      }
      p {
        background-color: rgba($gray-border, .5);
        border-radius: .25rem;
        color: var(--text-2);
        cursor: pointer;
        display: inline-block;
        margin: 0 1rem;
        font-size: .9rem;
        font-weight: 600;
        padding: 0 .4rem;
        position: relative;
        transition: box-shadow .1s linear;
        i {
          margin-left: .1rem;
        }
        @include mobile {
          font-size: 1rem;
          padding: .2rem .6rem;
          i {
            margin-left: .3rem;
          }
        }
        
        /*&:hover {
          box-shadow: 1px 1px 2px 1px  rgba(5, 5, 10, 0.15);
        }*/
      }
      &.active {
        transform: scale(1);
      }
      
    }
  }
  .arrows {
    background-color: #272728;
    border-radius: 1.5rem;
    color: $white;
    cursor: pointer;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    bottom: 1rem;
    left: 18rem;
    height: 3rem;
    overflow: hidden;
    width: 6rem;
    z-index: 2;
    @include mobile {
      border-radius: 1.75rem;
      left: 2rem;
      height: 3.5rem;
      width: 7rem;
      bottom: 1.5rem;
    }
    i {
      line-height: 3rem;
      text-align: center;
      width: 3rem;
      @include mobile {
        line-height: 3.5rem;
        width: 3.5rem;
        font-size: 1.1rem;
      }
      &:hover {
        background-color: rgba(white, .1);
      }
      &:active {
        background-color: rgba(white, .15);
      }
    }
  }
}

</style>
