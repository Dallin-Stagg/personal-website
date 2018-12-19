<template>
  <div class="my-footer">
		<div class="footer_data">
      
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
	background: linear-gradient(10deg,$gray-dk,$header-dk);
	width: 100%;
	.footer_data {
		padding: 3rem 0;	
	} 
}
</style>
