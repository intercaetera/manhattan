<template lang='pug'>
.toolbar
	toolbar-item(name="Cursor", icon="fa-mouse-pointer", :class="{active: selected.cursor}")
	toolbar-item(name="Planet", icon="fa-globe", :class="{active: selected.planet}")
	toolbar-item(name="Station", icon="fa-industry", :class="{active: selected.station}")
	toolbar-item(name="Jump", icon="fa-street-view", :class="{active: selected.jump}")
	toolbar-item(name="Trade Lane", icon="fa-exchange", :class="{active: selected.lane}")
	toolbar-item(name="Star", icon="fa-star", :class="{active: selected.star}")
	toolbar-item(name="Custom", icon="fa-superpowers", :class="{active: selected.custom}")
</template>

<script>
import ToolbarItem from './Toolbar/ToolbarItem.vue'

export default {
	props: ['selectedTool'],
	computed: {
		selected() {
			let selected = {}
			selected[this.selectedTool] = true
			return selected
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
