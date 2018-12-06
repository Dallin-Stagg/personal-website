<template>
  <div class="my-resume">
		<div class="modal">
			<div class="modal_banner">
				<i class="fa fa-times" @click="$store.commit('toggleModal')"></i>
				<a :href="downloadLink"><i class="fa fa-file-download"></i></a>
			</div>
			<div class="iframe_wrapper">
				<iframe :src="link" frameborder="0" scrolling="no"></iframe>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Resume',
	data() {
		return {
			toggleDownload: false,
			link: 'https://onedrive.live.com/embed?cid=F2D94E544E7CA959&resid=F2D94E544E7CA959%212746&authkey=ALGbXcEeBoSF3xg&em=2'
			// to get embed link, go to onedrive.com, find the desired file, right click it, and click embed
		}
	},
  computed: {
		activeRoute() {
			return this.$route.name
		},
		downloadLink() {
			return this.link.split('embed').join('download')
		}
  }
}
</script>
<style scoped lang="scss">
@import '../assets/styles/global-styles.scss';


.my-resume {
	animation: .5s ease-out 0s 1 backgroundFadeIn;
	background-color: rgba(0,0,0,0.5);
	display: flex;
	align-items: center;
  justify-content: center;
	height: 100vh;
	position: fixed;
	width: 100%;
	z-index: 10;
	.modal {
		animation: .5s ease-out 0s 1 modalAnimation;
		box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.25);
		position: relative;
		width: 70rem;
		@include mobile {
			width: calc(100% - 1rem);
		}
		.modal_banner {
			background: linear-gradient(190deg,$gray-lt,$gray);
			border-top-right-radius: .5rem;
			border-top-left-radius: .5rem;
			overflow: auto;
			padding: .2rem;
			i {
				border-radius: 50%;
				color: rgba($gray-dk, .8);
				cursor: pointer;
				float: right;
				line-height: 1.8rem;
				text-align: center;
				width: 1.8rem;
				transition: background-color .2s ease-out;
				&:hover {
					background-color: rgba($gray, .4);
				}
				@include mobile {
					background-color: rgba($gray, .9);
					border-radius: 1.75rem;
					box-shadow: inset 0 1px 3px 0 rgba(24, 55, 69, 0.25);
					font-size: 1.2rem;
					line-height: 2.5rem;
					margin: .25rem;
					width: 3.5rem;
				}
			}
		}
		.iframe_wrapper {
			background-color: $white;
			border-bottom-right-radius: .5rem;
			border-bottom-left-radius: .5rem;
			padding-bottom: .5rem;
			@include mobile {
				border-radius: none;
				padding: 0;
			}
			iframe {
				border-radius: 4px;
				height: 80vh;
				width: 100%;
				@include mobile {
					height: calc(100vh - 5rem);
				}
			}
		}
		
	}
	@keyframes modalAnimation {
    0% {
      opacity: 0;
      bottom: 10rem;
			transform: scale(.5);
    }
    100% {
      opacity: 1;
      bottom: 0;
			transform: scale(1);
    }
  }
}
@keyframes backgroundFadeIn {
	0% {
		background-color: rgba(0,0,0,0.0);
	}
	100% {
		background-color: rgba(0,0,0,0.5);
	}
}
</style>
