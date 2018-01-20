<template lang="pug">
.station
	i.fa.fa-industry
	p 
		i.fa.fa-times(v-if="!entity.dockable")
		| {{ entity.name }}
	
</template>

<script>
export default {
	props: ['entity'],
	data() {
		return {}
	}
}
</script>

<style scoped lang='stylus'>
.station
	color white
	border-radius 100%
	display flex
	flex-direction column
	align-items center
	justify-content space-between
	transform translateX(-50%)
	position relative

	i.fa-industry
		text-align center
		transform translateY(-50%)

	i.fa-times
		padding-right 0.2em

	p
		font-size .8em
		min-width 100px
		text-align center
		text-shadow 0 0 2px black
		background rgba(black, 0.6)

</style>
