<template>
  <div class="experience">
		<div class="page_header">    
			<h1>Experience</h1>
			<h2>See what I'm up to</h2>
		</div>
		<div class="experience_item" v-for="(item, i) in items" :key="i">
			<div class="upper_section">
				<div class="image" :class="item.image_class"></div>
				<div class="title">
					<h3>{{ item.title }}</h3>
					<h4>{{ item.position_and_time }}</h4>
					<!--<h5>{{ item.area }}</h5>-->
				</div>
			</div>
			<p>{{ item.description }}</p>
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
							description: 'BYU presented unprecedented scale and diversity of opportunity. My professors constantly pushed me to expand and adjust the way I think in a pursuit to constantly improve who I am as a creator. My experience performming with BYU Synthesis and other top ensembles enstilled in me a passion for music and creating a unique identity. My engagement in the Tech, Private Equity and Venture Capital, and Corporate Finance clubs helped advance my learning and introduced me to a wealth of extremely intelligent peers. BYU taught me to love learning, serve without restraint, and to push my boundaries as far as they will go for the betterment of all those I come in contact with.',
					},
					{
							image_class: 'mil',
							title: 'Millenium Auto Network',
							position_and_time: 'Software Developer, October 2017 - November 2017',
							area: 'Provo, UT',
							description: 'After gaining valuable experience in the industry, I was hired as a temporary developer directly in charge of optimizing the company website for mobile devices. As part of my work I overhauled the current stylesheets and implemented media queries to assist in overall visual and user experience enhancements. I assisted lead developers of their team in the optimization of load time and image rendering on a website that requires numerous pictures to be loaded quickly and effectively. Working with Millennium was an extremely valuable experience both because of the experience I gained and the opportunity to freelance and work remotely for an outside company.'
					},
					{
							image_class: 'rc',
							title: 'Room Choice',
							position_and_time: 'Frontend Software Developer, March 2017 - November 2018',
							area: 'Provo, UT',
							description: 'At Room Choice, I progressed from having a minimal coding background, to a mastery of several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. Regular completion of these projects validated that quality stems from attention to detail and client-first thinking. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and company website. This gave me the opportunity to test the valuable skills I had learned, as I created robust and clean stylesheets to enhance user experience, to implimenting global media queries to allow users to lease beds and sign contracts from anywhere!'
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
	background: url('../assets/images/overlay-grid.svg'), linear-gradient(50deg, #1CB5E0, #000046);

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 0 5rem;
}
.experience_item {
	background-color: $white;
	border-radius: 4px;
	box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.3);
	box-sizing: border-box;
	margin: 0 auto 1rem;
	width: 52rem;
	padding: 2rem;
	@include mobile {
		border: 1px solid $gray-border;
		border-radius: .5rem;
		padding: 1.5rem 1.3rem;
		width: calc(100% - 2rem);
	}
	.upper_section {
		overflow: auto;
		padding-bottom: .3rem;
		.image {
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			border-radius: 50%;
			float: left;
			margin: 0 1rem 0 .3rem;
			height: 4rem;
			width: 4rem;
			@include mobile {
				float: none;
				margin: 0 auto .5rem;
				height: 5rem;
				width: 5rem;
			}
			&.byu {
				background-image: url('../assets/images/byu-logo.jpg');
			}
			&.rc {
				background-image: url('../assets/images/room-choice-logo.png');
			}
			&.mil {
				background-image: url('../assets/images/millenium-logo.png');
			}
		}
		.title {
			float: left;
			@include mobile {
				float: none;
				text-align: center;
			}
		}
	}
	h3 {
		color: $gray-dk;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 .2rem;
		@include mobile {
			font-size: 1.6rem;
			margin-bottom: .5rem;
		}
	}
	h4 {
		color: $blue;
		font-size: .95rem;
		font-weight: 500;
		margin: 0 0 1rem;
		@include mobile {
			font-size: 1.1rem;
		}
	}
	h5 {
		color: $blue;
		font-size: .9rem;
		font-weight: 400;
		@include mobile {
			font-size: 1.1rem;
		}
	}
	p {
		color: $text-secondary;
		font-size: .95rem;
		margin: .5rem 0;
		text-align: justify;
		@include mobile {
			font-size: 1rem;
			text-align: left;
		}
	}
	.justify {
  text-align: justify;
  word-spacing: -10px;
}
 
.justify:after {
  content: "";
  display: inline-block;
  width: 100%;
}
	ul {
		li {
			color: $text-secondary;
			font-size: .95rem;
			@include mobile {
				font-size: 1.1rem;
			}
		}
	}
}
</style>
