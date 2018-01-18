<template lang='pug'>
.element-list
	ul
		li(v-for="each in list")
			span(:class="", v-on:click="select(each.id)") {{ each.name }}
			i.fa.fa-trash(v-on:click="remove(each.id, each.name)")
</template>

<script>
import { EventBus } from '@/eventbus'

export default {
	props: ['list', 'item'],
	methods: {
		select(id) {
			EventBus.$emit('selectSolar', id)
		},
		remove(id, name) {
			if(confirm(`Are you sure you want to delete ${name}?`)) {
				EventBus.$emit('deleteSolar', id)
			}
		}
	},
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
	overflow auto

	padding .5em
	color white

li
	display flex
	width 100%
	justify-content space-between
	padding .2em
	color gray

	span
		cursor pointer
		
		&.active
			color white

	i
		cursor pointer
		transition color .3s ease-in-out

		&:hover
			color red
</style>
