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
							description: 'Duke presented unprecedented scale and diversity of opportunity. My four years of phenomenal professors across the disciplines pushed me to expand, challenge, and adjust my worldview. My experience dancing with DefMo showed me the power of empathetic leadership and expanded my artistic comfort zone. My tenure throwing major, campus-wide events validated that quality stems from attention to detail. My junior fall semester abroad at Londons UCL humbled me to explore my place in the world. My engagement in Dukes tech & innovation initiatives exercised my creative muscle, sparked my obsession with design, and strengthened my tolerance to adversity. Duke showed me what I love to do, gifted me with a love for learning, and surrounded me with a wealth of inspiring peers.',
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
	background-image: url('../assets/images/overlay-grid.svg'), linear-gradient(10deg, #1f4037, #00bf8f);
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
	grid-template-columns: 2fr 5fr;
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
			border-radius: .5rem;
			height: 12rem;
			width: 13rem;
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
					color: $text-secondary;
					font-size: .95rem;
					margin: .5rem 0;
					@include mobile {
							font-size: 1.1rem;
					}
			}
	}
}
</style>
