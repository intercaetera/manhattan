<template lang="pug">
.map(v-on:changeTool="changeTool")
	toolbar(:selectedTool="state.selectedTool")
	viewport(:selectedTool="state.selectedTool")
	.menu
		edit(:item="state.selectedItem")
		element-list(:list="state.solars", :item="state.selectedItem")
</template>

<script>
import Toolbar from './Toolbar.vue'
import Viewport from './Viewport.vue'

import Edit from './Menu/Edit.vue'
import ElementList from './Menu/ElementList.vue'

import { EventBus } from '@/eventbus.js'
import * as classes from '@/classes.js'

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
		this.state.selectedItem = solar
		this.state.solars.push(solar)
	},
	updateSolar(id, solar) {
		const i = this.state.solars.findIndex(el => el.id === id)
		this.state.solars[i] = solar
	},
	selectSolar(id) {
		const i = this.state.solars.findIndex(el => el.id === id)
		this.state.selectedItem = this.state.solars[i]
	},
	deleteSolar(id) {
		const i = this.state.solars.find(el => el.id === id)
		if(i) {
			this.state.solars.splice(i, 1)
			this.state.selectedItem = null
		}

	}
}

EventBus.$on('changeTool', (tool) => {
	store.changeTool(tool)
})

EventBus.$on('selectSolar', (id) => {
	store.selectSolar(id)
})

EventBus.$on('deleteSolar', (id) => {
	store.deleteSolar(id)
})

EventBus.$on('createSolar', (type, x, y) => {
	let created

	let entity = {
		id: shortid.generate(),
		type,
		notes: ""
	}

	if(['planet', 'field', 'station', 'jump', 'star', 'custom'].includes(type)) {
		entity.position = { x, y }
		entity.infocard = ""

		if(type === 'planet') {
			entity.name = "Unknown Planet"
			entity.owner = ""
			entity.radius = 1
			entity.dockable = false
			created = new classes.Planet(entity)
		}

		if(type === 'station') {
			entity.name = "Unknown Station"
			entity.owner = ""
			entity.dockable = false
			created = new classes.Station(entity)
		}

		if(type === 'jump') {
			entity.name = "Unknown Jump Hole"
			entity.target = ""
			entity.gate = false
			created = new classes.Jump(entity)
		}

		if(type === 'star') {
			entity.name = "Medium White"
			entity.radius = 0
			entity.corona = 0
			created = new classes.Star(entity)
		}

		if(type === 'field') {
			entity.name = "Unknown Nebula"
			entity.verticalRadius = 0
			entity.horizontalRadius = 0
			entity.tilt = 0
			created = new classes.Field(entity)
		}

		if(type === 'custom') {
			entity.name = "Object Unknown"
			entity.owner = ""
			entity.dockable = false
			entity.custom = ""
			created = new classes.CustomSolar(entity)
		}
	}

	store.addSolar(created)
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
