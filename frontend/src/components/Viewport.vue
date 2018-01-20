<template lang='pug'>
.viewport(v-on:mouseup='click', v-on:mousedown='tradelane')
	grid
	.entities
		entity(v-for="each in list", :key="each.id", :entity="each", :selected="selectedItem")
</template>

<script>
import Grid from './Viewport/Grid.vue'
import Entity from './Viewport/Entity.vue'

import { EventBus } from '@/eventbus'

let laneStart = {}

export default {
	props: ['selectedTool','selectedItem', 'list'],
	components: {
		Grid, Entity
	},
	methods: {
		tradelane(e) {
			if(this.selectedTool !== 'lane') return

			const rect = e.target.getBoundingClientRect()
			const x = (e.clientX - rect.left) / e.target.clientWidth
			const y = (e.clientY - rect.top) / e.target.clientHeight

			laneStart = {
				x, y
			}
		},
		click(e) {
			const rect = e.target.getBoundingClientRect()
			const x = (e.clientX - rect.left) / e.target.clientWidth
			const y = (e.clientY - rect.top) / e.target.clientHeight

			const tool = this.selectedTool

			if(tool === 'cursor') {
				// handle click and edit of an element
			}

			if(['planet', 'station', 'jump', 'field', 'star', 'custom'].includes(tool)) {
				EventBus.$emit('createSolar', tool, x, y)
			}

			if(tool === 'lane') {
				let laneEnd = { x, y }
				EventBus.$emit('createLane', laneStart, laneEnd)
			}
		}
	}
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
	overflow hidden

.entities
	position absolute
	top 0
	left 0
	height 100%
	width 100%
</style>
