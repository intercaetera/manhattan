<template lang='pug' v-if="entity.type != 'lane'">
	.entity(:style="styleObject")
		span.name {{ entity.name }}
	
</template>


<script>
export default {
	props: ['entity'],
	methods: {
		percentage(c) {
			return (c * 100) + '%'
		}
	},
	computed: {
		styleObject() {
			return {
				top: this.percentage(this.entity.position.y),
				left: this.percentage(this.entity.position.x)
			}
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang='stylus'>
.entity
	position absolute
	height 8px
	width 8px
	background white

.name
	position absolute
	top 8px
	left 4px
	width 64px
	transform translateX(-50%)
	color white
	font-size .7em
	text-shadow 5px 1px black
	text-align center
</style>
