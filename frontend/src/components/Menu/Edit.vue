<template lang='pug'>
.data(v-if="item")
	h1 {{ item.name }}
</template>

<script>
export default {
	props: ['item'],
	data() {
		return {}
	
	}
}
</script>

<style scoped lang='stylus'>
.data
	height 100%
	width 100%
	margin-bottom .5em
	box-shadow inset 0 0 10px #002255

	overflow auto

	color white
</style>
