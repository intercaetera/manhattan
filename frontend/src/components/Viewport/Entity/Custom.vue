<template lang="pug">
.custom
	i.fa.fa-superpowers
	p 
		i.fa.fa-sign-in(v-if="entity.dockable")
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
.custom
	color white
	border-radius 100%
	display flex
	flex-direction column
	align-items center
	justify-content space-between
	transform translateX(-50%)
	position relative

	i.fa-superpowers
		text-align center
		transform translateY(-50%)

	i.fa-sign-in
		padding-right 0.2em

	p
		font-size .8em
		min-width 100px
		text-align center
		background rgba(black, 0.6)

</style>
