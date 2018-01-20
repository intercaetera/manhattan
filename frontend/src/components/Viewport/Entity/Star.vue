<template lang="pug">
.star
	.corona(:style="{ height: `${entity.corona / 10}em`, width: `${entity.corona / 10}em` }")
	i.fa.fa-star(:style="{ fontSize: `${entity.radius / 10}em` }")
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
.star
	color white
	border-radius 100%
	display flex
	flex-direction column
	align-items center
	transform translateX(-50%)
	position relative

	i.fa-star
		text-align center
		transform translateY(-50%)

	.corona
		position absolute
		border-radius 100%
		border 1px solid rgba(red, .3)
		transform translateY(-50%)

	p
		min-width 80px
		text-align center
		position absolute
		background rgba(black, 0.6)
		font-size .6em

</style>
