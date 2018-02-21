<template lang="pug">
svg.lane(width="100%", height="100%", viewBox="0 0 100 100", preserveAspectRatio="none")
	line(:x1="co.x1", :y1="co.y1", :x2="co.x2", :y2="co.y2", stroke="#77AAFF", stroke-width="0.1", stroke-linecap="round", stroke-dasharray="1,0.4")
</template>

<script>
export default {
	props: ['entity'],
	computed: {
		co() {
			return {
				x1: this.entity.start.x * 100,
				y1: this.entity.start.y * 100,
				x2: this.entity.end.x * 100,
				y2: this.entity.end.y * 100
			}
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang='stylus'>
.lane
	display block
</style>
