<template>
  <div class="my-resume">
		<div class="modal">
			<div class="modal_banner">
				<i class="fa fa-times"></i>
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
	background-color: rgba(0,0,0,0.5);
	display: flex;
	align-items: center;
  justify-content: center;
	height: 100vh;
	position: fixed;
	width: 100%;
	z-index: 10;
	.modal {
		box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.25);
		width: 70rem;
		.modal_banner {
			background-color: $gray-lt;
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
			}
		}
		.iframe_wrapper {
			background-color: $gray-lt;
			border-bottom-right-radius: .5rem;
			border-bottom-left-radius: .5rem;
			padding-bottom: .5rem;
			iframe {
				border-radius: 4px;
				height: 80vh;
				width: 100%;
			}
		}
		
	}
}
</style>
