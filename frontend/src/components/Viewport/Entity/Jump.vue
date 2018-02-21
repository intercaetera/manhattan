<template lang="pug">
.jump
	i.fa.fa-street-view
	p 
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
.jump
	color white
	border-radius 100%
	display flex
	flex-direction column
	align-items center
	justify-content space-between
	transform translateX(-50%)

	i.fa-street-view
		text-align center
		transform translateY(-50%)

	i.fa-times
		padding-right 0.2em

	p
		font-size .8em
		min-width 100px
		text-align center
		background rgba(black, 0.6)

</style>
