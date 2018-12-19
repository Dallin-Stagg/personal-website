<template>
  <div class="contact_me">
		<div class="modal">
			<h4>Let's Connect</h4>
			<i class="fa fa-times close_btn" @click="$store.commit('toggleModal')"></i>
			<div class="input_item">
				<p :class="{ 'shift': name }">NAME</p>
				<input
					ref="autofocus"
					type="text"
					v-model="name"
					required>
			</div>
			<div class="input_item">
				<p :class="{ 'shift': email }">EMAIL</p>
				<input
					type="email"
					v-model="email"
					required>
			</div>
			<div class="input_item">
				<p :class="{ 'shift': message }">MESSAGE</p>
				<textarea
					v-model="message"
					required>
				</textarea>
			</div>
			<div class="toggle_item">
				<div class="ds_toggle left" @click="request_resume = !request_resume"><div class="dot" :class="{ 'toggled': request_resume }"></div></div>
				<p>REQUEST RESUME</p>
			</div>
			<div class="ds_btn" :class="{ 'disabled': !inputReady }" @click="go()">Send<span v-if="!inputReady">&nbsp;<i class="fa fa-exclamation-circle"></i></span></div>
		</div>
	</div>
</template>
<script>
export default {
	// to get embed link, go to onedrive.com, find the desired file, right click it, and click embed
	// to download hit this.link.split('embed').join('download')
	name: 'Contact',
	data() {
		return {
			name: '',
			email: '',
			message: '',
			request_resume: false
		}
	},
	mounted() {
		this.$refs.autofocus.focus()
	},
  computed: {
		activeRoute() {
			return this.$route.name
		},
		inputReady() {
			return this.name && this.email && this.message
		}
  },
  methods: {
	  go() {
		  this.toggleAlert(this.inputReady)
		  if (this.inputReady) {
			  /*	// https://script.google.com/macros/s/AKfycbwS78apLRhuzlmigzzMCZH_2Y6opmpWeCqfbc1_unWqEevmsUI/exec
				var contact_url =
					'https://script.google.com/macros/s/AKfycbwS78apLRhuzlmigzzMCZH_2Y6opmpWeCqfbc1_unWqEevmsUI/exec'
				var date = new Date()
				fetch(
					contact_url +
					'?name=' +
					this.name +
					'&email=' +
					this.email +
					'&message=' +
					this.message +
					'&date=' +
					date +
					'&request_resume=' +
					this.request_resume
				)
				this.$store.commit('toggleModal')
				*/
			}
	  },
	  toggleAlert(ready) {
		  if (ready) {
			  var alertInfo = {
					text: 'Message sent. We will be in touch shortly.',
					type: 'success'
				}
		  } else {
			  var alertInfo = {
					text: 'Please fill out all fields before sending.',
					type: 'warning'
				}
			}
			this.$store.commit('toggleAlert', alertInfo)
	  }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/styles/global-styles.scss';


.contact_me {
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
		background-color: $white;
		border-radius: .5rem;
		box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.25);
		padding: 0 .8rem;
		position: relative;
		width: 18rem;
		@include mobile {
			width: calc(100% - 1rem);
		}
		h4 {
			color: rgba($gray-dk, .8);
			font-size: 1.5rem;
			font-weight: 700;
			line-height: 3rem; 
			margin: 0;
			padding: 1.5rem 0 .5rem;
			text-align: center;
			text-indent: .5rem;
			text-transform: uppercase;
		}
		.close_btn {
			border-radius: 50%;
			color: rgba($gray-dk, .8);
			cursor: pointer;
			line-height: 1.8rem;
			position: absolute;
			text-align: center;
			top: .5rem;
			right: .5rem;
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
		.input_item {
			margin: 1rem 0;
			position: relative;
			p {
				background-color: $white;
				color: rgba($gray-dk, .8);
				font-size: .8rem;
				font-weight: 600;
				line-height: 1.5rem;
				top: .5rem;
				left: .95rem;
				margin: 0;
				padding: 0;
				pointer-events: none;
				position: absolute;
				transition: font-size .1s ease-out, padding .1s ease-out, top .1s ease-out, left .1s ease-out;
				&.shift {
					font-size: .7rem;
					padding: 0 .3rem;
					top: -.8rem;
					left: .7rem;
				}
			}
			input {
				border: 1.5px solid $gray-border;
				border-radius: .5rem;
				box-sizing: border-box;
				color: $gray-dk;
				height: 2.5rem;
				font-family: system-ui;
				font-size: .85rem;
				font-weight: 500;
				outline: none;
				text-indent: .8rem;
				width: 100%;
				transition: border .1s ease-out, box-shadow .1s ease-out;
				&:focus {
					border: 1.5px solid $blue;
					box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
				}
			}
			textarea {
				border: 1.5px solid $gray-border;
				border-radius: .5rem;
				box-sizing: border-box;
				color: $gray-dk;
				height: 10rem;
				font-family: system-ui;
				font-size: .85rem;
				font-weight: 500;
				resize: none;
				outline: none;
				padding: .7rem .8rem;
				width: 100%;
				transition: border .1s ease-out, box-shadow .1s ease-out;
				&:focus {
					border: 1.5px solid $blue;
					box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
				}
			}
		}
		.toggle_item {
			border-bottom: 1px solid $gray-border;
			overflow: auto;
			padding-bottom: 1.5rem;
			.left {
				float: left;
			}
			p {
				color: rgba($gray-dk, .8);
				float: left;
				font-size: .8rem;
				font-weight: 600;
				line-height: 1.8rem;
				margin: 0;
				text-indent: .8rem;
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
