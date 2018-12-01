<template>
  <div class="my-footer">
        <div class="footer_data">
            <div class="info_section">
                <h4>Let's connect.</h4>
                <p>Email: <a href="mailto:dallin.stagg@gmail.com">dallin.stagg@gmail.com</a></p>
                <p>Call: <a href="tel:3854340401">(385)-434-0401</a></p>
                <div class="social_buttons">
                    <i class="fab fa-facebook-f" @click="open('https://www.facebook.com/dallin.stagg')"></i>
                    <i class="fab fa-linkedin-in" @click="open('https://www.linkedin.com/in/dallin-stagg')"></i>
                    <i class="fab fa-instagram" @click="open('https://www.instagram.com/dallinstagg/')"></i>
                </div>
            </div>
        </div>
        <!-- IMAGE PRELOADING -->
        <div id="preload-01"></div>
        <div id="preload-02"></div>
        <div id="preload-03"></div>
    </div>
</template>
<script>
export default {
  name: 'Footer',
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
#preload-02 {
  background: url('../assets/images/desk-shot.jpg') no-repeat -9999px -9999px;
}
#preload-03 {
  background: url('../assets/images/close-up-code.jpg') no-repeat -9999px -9999px;
}

.my-footer {
    background-color: $gray-lt;
    border-top: 1px solid $gray-border;
    box-sizing: border-box;
    width: 100%;
    .footer_data {
        align-content: center;
        display: grid;
        justify-content: center;
        padding: 3rem 0;
        .info_section {
            h4 {
                color: $gray-dk;
                font-size: 1.3rem;
                font-weight: 700;
                margin: 1rem 0;
                text-align: center;
            }
            p {
                color: $gray-dk;
                font-size: 1rem;
                font-weight: 600;
                line-height: 2rem;
                margin: 0;
                text-align: center;
                a {
                    color: $blue;
                }
            }
            .social_buttons {
                align-content: center;
                display: grid;
                justify-content: center;
                grid-template-columns: 1fr 1fr 1fr;
                margin: 1.5rem auto;
                width: 10rem;
                i {
                    background-color: $blue;
                    border-radius: 50%;
                    color: $white;
                    cursor: pointer;
                    font-size: 1.1rem;
                    line-height: 2.5rem;
                    margin: 0 auto;
                    text-align: center;
                    width: 2.5rem;
                    transition: .2s box-shadow ease-out;
                    &:hover {
                        box-shadow: 0 3px 10px 0 rgba(34,77,97,.25);
                    }
                }
                .fa-facebook-f {
                    background-color: #3b5998;
                }
                .fa-linkedin-in {
                    background-color: 0077B5;
                }
                .fa-instagram {
                    background: radial-gradient(circle at 30% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%);
                    font-size: 1.2rem;
                }
            }
        }
        
    }
    
}
</style>
