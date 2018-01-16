<template lang='pug'>
	.toolbar-item(:title="name", v-on:click="changeTool")
		i.fa(:class="icon")
</template>

<script>
import { EventBus } from '@/eventbus.js'

export default {
	props: ['name', 'id', 'icon', 'color'],
	methods: {
		changeTool() {
			EventBus.$emit('changeTool', this.id)
		}
	},
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
