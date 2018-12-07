<template>
  <div class="experience">
		<div class="page_header">    
			<h1>Experience</h1>
			<h2>See what I'm up to</h2>
		</div>
		<div class="experience_item" v-for="(item, i) in items" :key="i">
			<div class="item_image" :class="item.image_class"></div>
			<div class="information">
				<h3>{{ item.title }}</h3>
				<h4>{{ item.position_and_time }}</h4>
				<h5>{{ item.area }}</h5>
				<p>{{ item.description }}</p>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
      return {
				items: [
						{
							image_class: 'byu',
							title: 'Brigham Young University',
							position_and_time: 'Accounting, August 2017 -',
							area: 'Provo, UT',
							description: 'BYU IS THE SHIZ'
					},
					{
							image_class: 'mil',
							title: 'Millenium Auto Network',
							position_and_time: 'Software Developer, October 2017 - November 2017',
							area: 'Provo, UT',
							description: 'After gaining valuable experience in the industry, I was hired as a temporary developer, directly in charge of optimizing the company website for mobile devices.'
					},
					{
							image_class: 'rc',
							title: 'Room Choice',
							position_and_time: 'Software Developer, March 2017 - November 2018',
							area: 'Provo, UT',
							description: 'During my time at Room Choice, I progressed from having a minimal coding background, to a mastery in several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and fundamental changes to the way we did business.'
					}
        ]
      }
  },
  mounted() {
      this.items.reverse()
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global-styles.scss';
.experience {
	background: linear-gradient(45deg, rgba($blue, .8) 15%, rgba($blue-dk, .8) 85%),url('../assets/images/material-blue.jpg');
  background: linear-gradient(20deg, rgba($blue, .7) 15%, rgba($blue-dk, .7) 85%),linear-gradient(40deg, rgba($mint, .7) 15%, rgba($blue-dk, .7) 85%);
  background-image: url('../assets/images/overlay-striped.svg'), linear-gradient(10deg, #C06C84, #6C5B7B, #355C7D);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 0 5rem;
}
.experience_item {
	background-color: $white;
	border-radius: 4px;
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
	margin: 0 auto 1rem;
	width: 54rem;
	display: grid;
	grid-template-columns: 1fr 2fr;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	@include mobile {
			border: 1px solid $gray-border;
			border-radius: .5rem;
			box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.2);
			box-sizing: border-box;
			display: block;
			padding: 1rem;
			width: calc(100% - 3rem);
	}
	.item_image {
			box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.25);
			border-radius: 1rem;
			height: 14rem;
			width: 15rem;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			@include mobile {
					border-radius: .5rem;
					box-shadow: 0 3px 8px 0 rgba(24, 55, 69, 0.25);
					margin: .5rem auto 1.5rem;
					width: calc(100% - 1rem);
			}
			&.rc {
					background-image: url('../assets/images/room-choice-logo.png');
			}
			&.byu {
					background-image: url('../assets/images/byu-campus.jpg');
			}
			&.mil {
					background-image: url('../assets/images/millenium-logo.png');
			}
	}
	.information {
			h3 {
					color: $gray-dk;
					font-size: 1.5rem;
					margin: 1rem 0 .3rem;
					@include mobile {
							font-size: 1.6rem;
							margin-bottom: .5rem;
					}
			}
			h4 {
					color: $green;
					font-size: 1rem;
					font-weight: 500;
					margin: 0;
					@include mobile {
							font-size: 1.1rem;
					}
			}
			h5 {
					color: $blue;
					font-size: .95rem;
					font-weight: 500;
					margin: 0;
					@include mobile {
							font-size: 1.1rem;
					}
			}
			p {
					color: $gray-med;
					font-size: .95rem;
					margin: .5rem 0;
					@include mobile {
							font-size: 1.1rem;
					}
			}
	}
}
</style>
