<template lang='pug'>
.viewport(v-on:mouseup='click', v-on:mousedown='tradelane')
	grid
</template>

<script>
import Grid from './Viewport/Grid.vue'

import { EventBus } from '@/eventbus'

export default {
	props: ['selectedTool'],
	components: {
		Grid
	},
	methods: {
		tradelane(e) {
			if(this.selectedTool !== 'lane') return

			const x = round((e.clientX - e.target.offsetLeft) / e.target.offsetWidth)
			const y = round((e.clientY - e.target.offsetTop) / e.target.offsetHeight)

			console.log(x, y)
		},
		click(e) {
			const x = round((e.clientX - e.target.offsetLeft) / e.target.offsetWidth)
			const y = round((e.clientY - e.target.offsetTop) / e.target.offsetHeight)

			const tool = this.selectedTool

			if(tool === 'cursor') {
				// handle click and edit of an element
			}

			if(['planet', 'station', 'jump', 'field', 'star', 'custom'].includes(tool)) {
				EventBus.$emit('createSolar', tool, x, y)
			}
		}
	}
}

function round(n) {
	return Math.round((n + 0.00001) * 10000) / 10000
}
</script>

<style scoped lang='stylus'>
.viewport
	height 90vh
	width 90vh

	background url('~@/assets/sky.jpg') 
	background-size cover
	box-shadow inset 0 0 10px #002255

	position relative
</style>
