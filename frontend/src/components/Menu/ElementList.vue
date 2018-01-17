<template lang='pug'>
.element-list
	ul
		li(v-for="each in list") {{ each.name }}
</template>

<script>
export default {
	props: ['list'],
	data() {
		return {}
	
	}
}
</script>

<style scoped lang='stylus'>
.element-list
	height 100%
	width 100%
	box-shadow inset 0 0 10px #002255

	padding .5em
	color white

	ul
		list-style none
</style>
