<template lang="pug">
.wrapper
	vmap
</template>

<script>
import vmap from './components/Map.vue'

export default {
	components: {
		vmap
	}
}
</script>

<style lang="stylus">
*, *:after, *:before
	margin 0
	padding 0
	box-sizing border-box

.wrapper
	background black
	width 100vw
	height 100vh

	display flex
	align-items center
	justify-content center

	font-family "Helvetica", "Roboto", "Arial", sans-serif
</style>
