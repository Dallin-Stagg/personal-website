<template>
  <div class="my-footer">
		<div class="footer_data">
			<div class="info_section">
				<nav>
					<div class="link" v-for="(route, i) in routes" :key="i" :class="{ 'active': activeRoute === route }" @click="$router.push({ name: route })">{{ route }}</div>
				</nav>
				<p>Email: <a href="mailto:dallin.stagg@gmail.com">dallin.stagg@gmail.com</a></p>
				<p>Phone: <a href="tel:3854340401">(385)-434-0401</a></p>
				<div class="social_buttons">
					<i class="fab fa-linkedin-in" @click="open('https://www.linkedin.com/in/dallin-stagg')"></i>
					<i class="fab fa-github" @click="open('https://github.com/Dallin-Stagg')"></i>
				</div>
			</div>
		</div>
		<!-- IMAGE PRELOADING -->
		<div id="preload-01"></div>
	</div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
			routes: ['Home', 'Experience', 'Portfolio']
		}
  },
  computed: {
    activeRoute() {
      return this.$route.name
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

#preload-01 {
  background: url('../assets/images/mountain-and-lake.jpg') no-repeat -9999px -9999px;
}

.my-footer {
    background: linear-gradient(10deg,$gray-border,$gray-lt);
    background-color: $gray-lt;
    border-top: 1px solid $gray-border;
    box-sizing: border-box;
    width: 100%;
    .footer_data {
        padding: 3rem 0;
        .info_section {
            text-align: center;
            nav {
                margin: 1rem 0;
                @include mobile {
                    margin: 2rem 0;
                }
                .link {
                    color: $gray-dk;
                    cursor: pointer;
                    display: inline-block;
                    font-size: .9rem;
                    font-weight: 700;
                    margin: 0 .3rem;
                    text-transform: uppercase;
                    &:hover {
                        color: rgba($gray-dk, .8);
                    }
                    &.active {
                        color: rgba($gray-dk, .8);
                    }
                    @include mobile {
                        display: block;
                        font-size: 1.2rem;
                        margin: 1rem 0;
                    }
                }
            }
            p {
                color: $gray-dk;
                font-size: .9rem;
                font-weight: 600;
                line-height: 1.5rem;
                margin: 0;
                a {
                    color: $blue;
                }
                @include mobile {
                    font-size: 1.15rem;
                    line-height: 1.8rem;
                }
            }
            .social_buttons {
                margin: 1rem 0;
                @include mobile {
                    margin: 1.5rem 0;
                }
                i {
                    background-color: $blue;
                    border-radius: 4px;
                    color: $white;
                    cursor: pointer;
                    font-size: 1.1rem;
                    line-height: 2.5rem;
                    margin: 0 .5rem;
                    text-align: center;
                    width: 4rem;
                    transition: .2s box-shadow ease-out;
                    &:hover {
                        box-shadow: 0 3px 10px 0 rgba(34,77,97,.25);
                    }
                    @include mobile {
                        font-size: 1.5rem;
                        line-height: 3.5rem;
                        width: 6rem;
                    }
                }
                .fa-facebook-f {
                    background-color: #3b5998;
                }
                .fa-linkedin-in {
                    background-color: #0077B5;
                }
                .fa-github {
                    background-color: #333;
                }
                /* .fa-instagram {
                    background: radial-gradient(circle at 30% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%);
                    font-size: 1.2rem;
                } */
            }
        }
        
    }
    
}
</style>
