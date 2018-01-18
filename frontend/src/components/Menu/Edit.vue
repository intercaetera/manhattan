<template lang='pug'>
.data(v-if="item")
	.form-control
		input(type='text', v-model="item.name").large
	
	// Solars
	.form-control(v-if="item.position != undefined")
		label Position (x, y)
		.row
			input(type='text', v-model.number="item.position.x")
			input(type='text', v-model.number="item.position.y")
	.form-control(v-if="item.infocard != undefined")
		label Infocard
		textarea(v-model="item.infocard")

	// Lanes
	.form-control(v-if="item.start != undefined")
		label Position (x, y)
		.row
			input(type='text', v-model.number="item.start.x")
			input(type='text', v-model.number="item.start.y")
	.form-control(v-if="item.end != undefined")
		label Position (x, y)
		.row
			input(type='text', v-model.number="item.end.x")
			input(type='text', v-model.number="item.end.y")

	// Planet and Station
	.form-control(v-if="item.owner != undefined") 
		label Owner
		input(type='text', v-model="item.owner")
	.form-control(v-if="item.dockable != undefined")
		label Dockable
		input(type='checkbox', v-model="item.dockable")
	.form-control(v-if="item.radius != undefined")
		label Radius
		input(type='range', min='1', max='100', v-model="item.radius")
		span {{ item.radius }}
	
	// Jump
	.form-control(v-if="item.target != undefined")
		label Target
		input(type='text', v-model="item.target")
	.form-control(v-if="item.gate != undefined")
		.row
			input(type='radio', id='false', value='false', v-model='item.gate')
			label(for='false') Jump Hole
		.row
			input(type='radio', id='true', value='true', v-model='item.gate')
			label(for='true') Jump Gate

	// Star
	.form-control(v-if="item.corona != undefined")
		label Corona
		input(type='range', min='1', max='100', v-model='item.corona')
		span {{ item.corona }}

	// Field
	.form-control(v-if="item.verticalRadius != undefined")
		label Vertical radius
		input(type='range', min='1', max='100', v-model='item.verticalRadius')
		span {{ item.verticalRadius }}
	.form-control(v-if="item.horizontalRadius != undefined")
		label Horizontal radius
		input(type='range', min='1', max='100', v-model='item.horizontalRadius')
		span {{ item.horizontalRadius }}
	.form-control(v-if="item.tilt != undefined")
		label Tilt
		input(type='range', min='0', max='360', v-model='item.tilt')
		span {{ item.tilt }}

	// Custom
	.form-control(v-if="item.custom != undefined")
		label Custom properties
		textarea(v-model="item.custom")
	
	.form-control
		label Notes
		textarea(v-model="item.notes")
</template>

<script>
export default {
	props: ['item'],
	data() {
		return {
		}
	
	}
}
</script>

<style scoped lang='stylus'>
.data
	height 100%
	width 100%
	margin-bottom .5em
	padding .5em
	box-shadow inset 0 0 10px #002255

	overflow auto

	color white

.form-control
	display flex
	flex-direction column
	padding .2em

	label
		font-size .7em

.row
	width 50%
	display flex

input[type='text'], textarea
	width 100%
	background black
	border 1px solid #002255
	border-radius 4px
	padding .3em

	color white

	&:focus
		box-shadow inset 0 0 10px #0044AA

	&.large
		font-size 1.5em
</style>
