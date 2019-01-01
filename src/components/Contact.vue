<template>
  <div class="contact_me">
		<div class="modal">
			<i class="fa fa-times ds_close_btn" @click="close()"></i>
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
					<!-- FIX FOR MOBILE
						
						 <input type='text'
        :value='message1'
        @input='evt=>message1=evt.target.value'
        > -->
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
			<div class="ds_btn_modal" :class="{ 'disabled': !inputReady }" @click="go()">Send</div>
			<transition name="fade">
				<div class="success_prompt" v-if="messageSent">
					<h4>Thanks for contacting me! I'll be sure to contact you as soon as I am able! In the meantime, enjoy the confetti. :)</h4>
				</div>
			</transition>
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
			messageSent: false,
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
		inputReady() {
			return this.name && this.email && this.message
		}
  },
  methods: {
		go() {
			this.toggleAlert(this.inputReady)
			if (this.inputReady) {
				// https://script.google.com/macros/s/AKfycbwS78apLRhuzlmigzzMCZH_2Y6opmpWeCqfbc1_unWqEevmsUI/exec
				/* var contact_url =
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
				) */
				this.$confetti.start({
					shape: 'rect'
				})
				this.messageSent = true
			}
		},
		toggleAlert(ready) {
			var alertInfo = {
				text: '',
				type: ''
			}
			if (ready) {
				alertInfo.text = 'Message sent successfully!'
				alertInfo.type = 'success'
			} else {
				alertInfo.text = 'Please fill out all fields before sending.'
				alertInfo.type = 'warning'
			}
			this.$store.commit('toggleAlert', alertInfo)
		},
		close() {
			this.$confetti.stop()
			this.$store.commit('toggleModal')
		}
  }
}
</script>
<style scoped lang="scss">
@import '../assets/styles/global-styles.scss';

.ds_btn_modal {
	background-color: $green;
	border-radius: 1.5rem;
	box-shadow: 0 3px 7px 0 rgba(24, 55, 69, 0.1);
	color: $white;
	cursor: pointer;
	font-size: .8rem;
	font-weight: 600;
	letter-spacing: .5px;
	line-height: 2.3rem;
	text-align: center;
	text-transform: uppercase;
	margin: 1rem auto;
	width: 8rem;
	transition: background-color .2s ease-out;
	&.disabled {
		background-color: rgba($green, .4);
		box-shadow: none;
		cursor: not-allowed;
	}
}
.contact_me {
	background-color: rgba(0,0,0,0.5);
	backdrop-filter: blur(2px);
	display: flex;
	align-items: center;
  justify-content: center;
	height: 100vh;
	position: fixed;
	width: 100%;
	z-index: 10;
	.modal {
		background-color: $white;
		border-radius: .5rem;
		box-sizing: border-box;
		box-shadow: 0 5px 15px 0 rgba(24, 55, 69, 0.25);
		padding: 3rem 1rem 0;
		position: relative;
		width: 20rem;
		@include mobile {
			max-height: calc(100vh - 5rem);
			overflow: auto;
			width: calc(100% - 1rem);
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
				border: 1px solid $gray-border;
				border-radius: .5rem;
				box-shadow: inset 0 2px 5px 0 rgba(24, 55, 69, 0.1);
				box-sizing: border-box;
				color: $gray-dk;
				height: 2.5rem;
				font-family: system-ui;
				font-size: .85rem;
				font-weight: 500;
				outline: none;
				text-indent: .8rem;
				width: 100%;
				&:focus {
					border: 1px solid $blue;
				}
			}
			textarea {
				border: 1px solid $gray-border;
				border-radius: .5rem;
				box-sizing: border-box;
				box-shadow: inset 0 2px 5px 0 rgba(24, 55, 69, 0.1);
				color: $gray-dk;
				height: 10rem;
				font-family: system-ui;
				font-size: .85rem;
				font-weight: 500;
				resize: none;
				outline: none;
				padding: .7rem .8rem;
				width: 100%;
				&:focus {
					border: 1px solid $blue;
				}
			}
		}
		.toggle_item {
			overflow: auto;
			padding: 0 0 1.5rem 3rem;
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
		.success_prompt {
			border-radius: .5rem;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 1.5rem;
			position: absolute;
			top: 0;
			left: 0;
			background-color: $white;
			width: 100%;
			height: 100%;
			z-index: 15;
			h4 {
				color: rgba($gray-dk, .8);
				font-size: 1.3rem;
				text-align: center;
			}
		}
	}
}
</style>
