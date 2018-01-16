<template lang='pug'>
.grid
	.rows
		each val in [1, 2, 3, 4, 5, 6, 7, 8]
			.row= val

	.cols
		each val in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
			.col= val
</template>


<script>
export default {
	data() {
		return {}
	}
}
</script>

<style scoped lang='stylus'>
.grid
	position absolute
	height 100%
	width 100%
	pointer-events none
	color #003377
	user-select none
	-moz-user-select none

.rows, .cols
	position absolute
	top 0
	left 0
	height 100%
	width 100%

	pointer-events none

	display flex

.rows
	flex-direction column

.row, .col
	width 100%
	height 100%
	padding 1%

	display flex

	border 1px solid rgba(#002255, 0.5)
	box-shadow inset 0 0 25px rgba(#002255, 0.3)

.row
	align-items center
.col
	justify-content center


</style>
