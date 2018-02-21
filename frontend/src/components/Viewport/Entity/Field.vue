<template lang="pug">
.field(:style="fieldStyle")
	p(:style="{ transform: `rotate(-${entity.tilt}deg)` }") {{ entity.name }}
	
</template>

<script>
export default {
	props: ['entity'],
	computed: {
		fieldStyle() {
			return {
				height: `${this.entity.verticalRadius}%`,
				width: `${this.entity.horizontalRadius}%`,
				transform: `translateX(-50%) translateY(-50%) rotate(${this.entity.tilt}deg)`
			}
		}
	},

	data() {
		return {}
	}
}
</script>

<style scoped lang='stylus'>
.field
	color white
	border-radius 100%
	pointer-events none

	display flex
	align-items center
	justify-content center

	transform translate(-50%, -50%)
	
	border 1px solid gray

	p
		font-size .6em

</style>
