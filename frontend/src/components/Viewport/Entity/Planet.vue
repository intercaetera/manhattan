<template lang="pug">
.planet
	i.fa.fa-globe(:style="{ fontSize: `${entity.radius / 10}em` }")
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
.planet
	color white
	border-radius 100%
	display flex
	flex-direction column
	align-items center
	transform translateX(-50%)
	position relative

	i.fa-globe
		text-align center
		transform translateY(-50%)

	i.fa-sign-in
		padding-right 0.2em

	p
		min-width 80px
		text-align center
		position absolute
		background rgba(black, 0.6)

</style>
