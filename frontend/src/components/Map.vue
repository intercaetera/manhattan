<template lang="pug">
.map(v-on:changeTool="changeTool")
	toolbar(:selectedTool="state.selectedTool")
	viewport(:selectedTool="state.selectedTool")
	.menu
		edit(:item="state.selectedItem")
		element-list(:list="state.solars")
</template>

<script>
import Toolbar from './Toolbar.vue'
import Viewport from './Viewport.vue'

import Edit from './Menu/Edit.vue'
import ElementList from './Menu/ElementList.vue'

import { EventBus } from '@/eventbus.js'

import shortid from 'shortid'

let store = {
	debug: true,
	state: {
		selectedTool: "cursor",
		selectedItem: null,
		solars: []
	},

	changeTool(tool) {
		if(this.debug) console.log('Tool changed to: ' + tool)
		if(tool) {
			this.state.selectedTool = tool
		}
		else {
			if(this.debug) console.log('Can\'t change to undefined')
		}
	},

	addSolar(solar) {
		this.state.solars.push(solar)
		this.state.selectedItem = solar
	},
	updateSolar(id, solar) {
		const i = this.state.solars.find(el => el.id === id)
		this.state.solars[i] = solar
	},
	deleteSolar(id) {
		const i = this.state.solars.find(el => el.id === id)
		if(i) {
			this.state.solars.splice(i, 1)
		}
	}
}

EventBus.$on('changeTool', (tool) => {
	store.changeTool(tool)
})

EventBus.$on('createSolar', (type, x, y) => {

	let solar = {
		id: shortid.generate(),
		name: "New " + type,
		type: type,
		position: {
			x, y
		},
		infocard: ""
	}

	store.addSolar(solar)

})

export default {
	data: function() {
		return {
			state: store.state
		}
	},
	methods: {
		changeTool(tool) {
			console.log("caught")
			store.changeTool(tool)
		}
	},
	components: {
		Toolbar, Viewport, ElementList, Edit
	}
}
</script>

<style lang='stylus' scoped>
.map
	display flex
	align-items center
	justify-content center
	width 100%
	height 90vh

.menu
	width 20%
	height 100%
	padding-left 1em

	display flex
	flex-direction column
</style>
