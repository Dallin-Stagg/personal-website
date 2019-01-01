<template>
  <div class="resume">
		<transition name="filter_slide">
      <div class="ds_filter" v-if="showFilter">
				<i class="fa fa-times ds_close_btn" @click="closeFilter()"></i>
				<h3>Filters</h3>
				<div class="filter_section" @click="toggleFilterSection(i)" v-for="(item, i) in filters">
					<div class="filter_item" :class="{ 'opened': openedFilterSection === i }">
						<h4>{{ item.title }}</h4>
						<i class="fa fa-chevron-down"></i>
					</div>
				</div>
			</div>
    </transition>
		<div class="page_header">    
			<h1>Resume</h1>
			<h2>See what I've been up to</h2>
		</div>
		<div class="download_btn_wrapper">
			<a :href="downloadLink">
				<div class="ds_btn green"><i class="fa fa-file-download"></i> Download Resume</div>
			</a>
		</div>
		<div class="resume_outer_wrapper">
			<svg height="40">
				<polygon fill="white" points="0,40 896,0 896,40"></polygon>
			</svg>
			<i class="fa fa-filter filter_toggle" @click="showFilter = !showFilter"></i>
			<div class="content">
				<div class="resume_item" v-for="(item, i) in items" :key="i">
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
			<svg height="40">
				<polygon fill="white" points="0,0 0,40 896,0"></polygon>
			</svg>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
		return {
			link: 'https://onedrive.live.com/embed?cid=F2D94E544E7CA959&resid=F2D94E544E7CA959%212878&authkey=AIjBRexX3Hd4eLg&em=2',
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
			],
			showFilter: false,
			filters: [
				{
					title: 'Experience',
					display: true
				},
				{
					title: 'Education',
					display: true
				},
				{
					title: 'Skills',
					display: true
				}
			],
			openedFilterSection: ''
		}
	},
	computed: {
		downloadLink() {
			return this.link.split('embed').join('download')
		}
	},
	methods: {
		toggleFilterSection(filter) {
			if (this.openedFilterSection !== filter) {
				this.openedFilterSection = filter
			} else {
				this.openedFilterSection = ''
			}
		},
		closeFilter() {
			this.showFilter = false
			this.openedFilterSection = ''
		}
	},
  mounted() {
      this.items.reverse()
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global-styles.scss';
.filter_slide-enter-active, .filter_slide-leave-active {
  transition: opacity .5s, transform .5s;
}
.filter_slide-enter, .filter_slide-leave-to {
  opacity: 0;
  transform: translateX(24rem);
}
.resume {
	background: linear-gradient(50deg, #1CB5E0, #000046);
	padding: 3rem 0 5rem;
}
.ds_filter {
	background-color: $white;
	border-left: 1px solid $gray-border;
	box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.3);
	box-sizing: border-box;
  width: 18rem;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 2;
	h3 {
		color: $text-secondary;
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.5rem;
		margin: 0;
		padding: .5rem 0;
		text-indent: 1rem;
	}
	.filter_section {
		user-select: none;
		.filter_item {
			border-radius: 4px;
			box-shadow: 0 1px 3px 0 rgba(24, 55, 69, 0.3);
			color: $text-secondary;
			cursor: pointer;
			margin: .4rem .6rem;
			position: relative;
			transition: margin .15s linear;
			&:hover {
				h4 {
					text-indent: 1.2rem;
				}
			}
			&.opened {
				background: linear-gradient(50deg, rgba(#1CB5E0, .8), rgba(#000046, .8));
				border-radius: 0;
				color: $white;
				margin: .4rem 0;
				h4 {
					text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
				}
				i {
					text-shadow: 0px 2px 10px rgba(34, 77, 97, 0.7);
					transform: rotate(180deg);
				}
			}
			h4 {
				font-size: .9rem;
				font-weight: 500;
				line-height: 2.5rem;
				margin: 0;
				text-indent: 1rem;
				transition: text-indent .1s linear;
			}
			i {
				font-size: .7rem;
				line-height: 2.5rem;
				position: absolute;
				top: 0;
				right: 1rem;
				transition: transform .2s linear;
			}
		}
	}
}
.download_btn_wrapper {
	text-align: center;
	.download_btn {
		background-color: $white;
		border-radius: 1.5rem;
		display: inline-block;
		line-height: 3rem;
		padding: 0 1.5rem;
	}
}
.resume_outer_wrapper {
	margin: 0 auto;
	position: relative;
	width: 56rem;
	filter: drop-shadow( 0 5px 15px rgba(24, 55, 69, .3));
	svg {
		display: block;
		margin: 0 auto;
		width: 100%;
	}
	.filter_toggle {
		background-color: $gray-lt;
		border: 1px solid $gray-border;
		border-radius: 1.5rem;
		box-shadow: inset 0 1px 3px 0 rgba(24, 55, 69, 0.2);
		color: $text-secondary;
		cursor: pointer;
		font-size: .8rem;
		line-height: 2rem;
		position: absolute;
		right: 1rem;
		top: 1rem;
		text-align: center;
		width: 2rem;
	}
	.content {
		box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.3);
		background-color: $white;
	}
}
.resume_item {
	background-color: $white;
	border-radius: 4px;
	box-sizing: border-box;
	width: 100%;
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
