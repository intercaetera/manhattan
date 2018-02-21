<template lang="pug">
.star(:style="{ height: `${entity.corona}%`, width: `${entity.corona}%` }")
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
	justify-content center
	transform translateX(-50%) translateY(-50%)
	border 1px solid rgba(red, .3)

	i.fa-star
		text-align center

	p
		min-width 80px
		text-align center
		position absolute
		background rgba(black, 0.6)
		font-size .6em

</style>
