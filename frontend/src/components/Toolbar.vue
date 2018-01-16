<template lang='pug'>
.toolbar
	toolbar-item(name="Cursor", id="cursor", icon="fa-mouse-pointer", :class="{active: selected.cursor}")
	toolbar-item(name="Planet", id="planet", icon="fa-globe", :class="{active: selected.planet}")
	toolbar-item(name="Station", id="station", icon="fa-industry", :class="{active: selected.station}")
	toolbar-item(name="Jump", id="jump", icon="fa-street-view", :class="{active: selected.jump}")
	toolbar-item(name="Trade Lane", id="lane", icon="fa-exchange", :class="{active: selected.lane}")
	toolbar-item(name="Star", id="star", icon="fa-star", :class="{active: selected.star}")
	toolbar-item(name="Field", id="field", icon="fa-cloud", :class="{active: selected.field}")
	toolbar-item(name="Custom", id="custom", icon="fa-superpowers", :class="{active: selected.custom}")
</template>

<script>
import ToolbarItem from './Toolbar/ToolbarItem.vue'


console.log(Map)

export default {
	props: ['selectedTool'],
	computed: {
		selected() {
			let selected = {}
			selected[this.selectedTool] = true
			return selected
		}	
	},
	methods: {
		test() {
			console.log("caught")
		}
	},
	components: {
		ToolbarItem
	},
	data () {
		return {  }
	}
}
</script>

<style scoped lang='stylus'>
.toolbar
	display flex
	flex-direction column
</style>
