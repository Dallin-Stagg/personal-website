<template>
  <div class="my-alert" :class="{ 'show': showAlert }">
		<div class="type" :class="alertType"></div>
		<div class="text_wrapper">
			<h4>{{ alertText }}</h4>
		</div>
		<i class="fa fa-times" @click="$store.commit('clearAlert')"></i>
	</div>
</template>
<script>
export default {
  name: 'Alert',
  data() {
    return {
			routes: ['Home', 'Experience', 'Portfolio']
		}
  },
  computed: {
    activeRoute() {
      return this.$route.name
		},
		alertType() {
			return this.$store.state.alertInfo.type
		},
		alertText() {
			return this.$store.state.alertInfo.text
		},
		showAlert() {
			return this.$store.state.alertInfo.show
		}
  },
  methods: {
    open(link) {
      window.open(link);
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/styles/global-styles.scss';

.my-alert {
	background: $white;
	border-radius: 4px;
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
	padding: .25rem;
	position: fixed;
	top: 1rem;
	right: 1rem;
	z-index: 20;
	transform: translateX(30rem);
	opacity: 0;
	transition: transform .4s ease-out, opacity .4s ease-out;
	&.show {
		transform: translateX(0);
		opacity: 1;
	}
	.type {
		border-radius: 3px;
		float: left;
		height: 2rem;
		width: 6px;
		&.success {
			background-color: $green;
		}
		&.warning {
			background-color: $orange;
		}
		&.info {
			background-color: $gray-med;
		}
	}
	.text_wrapper {
		display: flex;
		float: left;
		align-items: center;
		justify-content: center;
		height: 2rem;
		max-width: 20rem;
		padding: 0 .5rem 0 1rem;
		h4 {
			color: rgba($gray-dk, .8);
			font-size: .9rem;
			font-weight: 500;
			line-height: .9rem;
			margin: 0;
		}
	}
	i {
		border-radius: 1rem;
		color: rgba($gray-dk, .8);
		cursor: pointer;
		float: left;
		font-size: .9rem;
		line-height: 1.8rem;
		margin: .1rem .2rem;
		text-align: center;
		width: 1.8rem;
		transition: background-color .2s ease-out;
		&:hover {
			background-color: rgba($gray, .4);
		}
	}
	
}
</style>
