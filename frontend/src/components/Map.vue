<template lang="pug">
.map
	toolbar(:selectedTool="state.selectedTool")
	viewport
</template>

<script>
import toolbar from './Toolbar.vue'
import viewport from './Viewport.vue'

let store = {
	debug: true,
	state: {
		selectedTool: "cursor"
	},

	changeTool(tool) {
		if(this.debug) console.log('Tool changed to: ' + tool)
		this.state.selectedTool = tool
	}
}

export default {
	data: function() {
		return {
			state: store.state
		}
	},
	components: {
		toolbar, viewport
	}
}
</script>

<style lang='stylus' scoped>
</style>
