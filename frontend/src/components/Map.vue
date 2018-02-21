<template lang="pug">
.wrapper
	.header
		input(type='text', v-model="state.systemName").title
		h6 ( {{ state.id }} )
	.map(v-on:changeTool="changeTool")
		toolbar(:selectedTool="state.selectedTool")
		viewport(:selectedTool="state.selectedTool", :list="state.solars", :selectedItem="state.selectedItem")
		.menu
			edit(:item="state.selectedItem")
			element-list(:list="state.solars", :item="state.selectedItem")
			save(:id="state.id")
</template>

<script>
import Toolbar from './Toolbar.vue'
import Viewport from './Viewport.vue'

import Edit from './Menu/Edit.vue'
import ElementList from './Menu/ElementList.vue'
import Save from './Menu/Save.vue'

import { EventBus } from '@/eventbus.js'
import * as classes from '@/classes.js'

import shortid from 'shortid'

let store = {
	state: {
		id: "",
		systemName: "New System",
		selectedTool: "cursor",
		unsavedChanges: false,
		selectedItem: null,
		solars: [],
		lanes: []
	},

	changeTool(tool) {
		if(tool) {
			this.state.selectedTool = tool
		}
	},
	addSolar(solar) {
		this.state.selectedItem = solar
		this.state.solars.push(solar)
		this.state.unsavedChanges = true
	},
	updateSolar(id, solar) {
		const i = this.state.solars.findIndex(el => el.id === id)
		this.state.solars[i] = solar
		this.state.unsavedChanges = true
	},
	selectSolar(id) {
		const i = this.state.solars.findIndex(el => el.id === id)
		this.state.selectedItem = this.state.solars[i]
	},
	deleteSolar(id) {
		const i = this.state.solars.findIndex(el => el.id === id)
		if(i >= 0) {
			if(this.state.solars[i] === this.state.selectedItem) {
				this.state.selectedItem = null
			}
			this.state.solars.splice(i, 1)
		}
		this.state.unsavedChanges = true

	},
	updateState(state) {
		this.state = state
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
			entity.radius = 20
			entity.dockable = false
			created = new classes.Planet(entity)
		}

		if(type === 'station') {
			entity.name = "Unknown Station"
			entity.owner = ""
			entity.dockable = true
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
			entity.radius = 20
			entity.corona = 40
			created = new classes.Star(entity)
		}

		if(type === 'field') {
			entity.name = "Unknown Nebula"
			entity.verticalRadius = 5
			entity.horizontalRadius = 5
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

EventBus.$on('createLane', (start, end) => {
	let entity = {
		id: shortid.generate(),
		name: "Unknown Trade Lane",
		type: 'lane',
		notes: '',
		start,
		end
	}

	store.addSolar(entity)
})

EventBus.$on('save', function() {
	store.state.id = shortid.generate()

	fetch('/api/create', {
		body: JSON.stringify(store.state),
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		}
	})
		.then(res => {
			if(res.status === 200) {
				return res.json()
			}
		})
		.then(json => {
			this.$router.push(store.state.id)
			console.log(json)
			store.state.unsavedChanges = false
		})
})

window.onbeforeunload = function() {
	if(store.state.unsavedChanges) {
		return "You have unsaved changes, are you sure you want to navigate away?"
	}
}

export default {
	data: function() {
		return {
			state: store.state
		}
	},
	methods: {
		changeTool(tool) {
			store.changeTool(tool)
		}
	},
	mounted: function() {
		if(this.$route.params.id) {
			fetch(`/api/${this.$route.params.id}`)
				.then(res => {
					console.log(res)
					if(res.status === 200) {
						return res.json()
					}
				})
				.then(json => {
					Object.assign(store.state, json)
					store.state.unsavedChanges = false
				})
				.catch(console.log)
		}
	},
	components: {
		Toolbar, Viewport, ElementList, Edit, Save
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

.wrapper
	background black
	width 100vw
	height 100vh

	display flex
	flex-direction column
	align-items center
	justify-content center

	font-family "Helvetica", "Roboto", "Arial", sans-serif


.header
	display flex
	align-items center

	h6
		color white
		opacity .5

	.title
		background none
		--webkit-appearance none
		outline none
		border none
		color white

		font-size 2em
		margin-bottom .5em
		font-family "Montserrat", "Roboto", sans-serif
		text-align center
</style>
