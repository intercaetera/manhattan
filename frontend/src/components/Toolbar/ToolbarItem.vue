<template lang='pug'>
	.toolbar-item(:title="name")
		i.fa(:class="icon")
</template>

<script>
export default {
	props: ['name', 'icon', 'color'],
	data() {
		return {}
	}
}
</script>

<style lang='stylus' scoped>
.toolbar-item
	width 2.5em
	height 2.5em
	background black
	color gray

	font-size 2em
	display flex
	align-items center
	justify-content center

	transition all .3s ease-in-out

	&.active
		color white

	&:hover
		cursor pointer
		color white
</style>
