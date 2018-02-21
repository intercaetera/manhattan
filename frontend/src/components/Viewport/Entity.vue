<template lang='pug' v-if="entity.type != 'lane'">
	planet(v-if="entity.type === 'planet'", :entity="entity", :style="styleObject", :class="ifSelected")
	station(v-else-if="entity.type === 'station'", :entity="entity", :style="styleObject", :class="ifSelected")
	jump(v-else-if="entity.type === 'jump'", :entity="entity", :style="styleObject", :class="ifSelected")
	star(v-else-if="entity.type === 'star'", :entity="entity", :style="styleObject", :class="ifSelected")
	field(v-else-if="entity.type === 'field'", :entity="entity", :style="styleObject", :class="ifSelected")
	custom(v-else-if="entity.type === 'custom'", :entity="entity", :style="styleObject", :class="ifSelected")
	lane(v-else-if="entity.type === 'lane'", :entity="entity", :style="styleObject", :class="ifSelected")
	
</template>


<script>
import Planet from './Entity/Planet.vue'
import Station from './Entity/Station.vue'
import Jump from './Entity/Jump.vue'
import Star from './Entity/Star.vue'
import Field from './Entity/Field.vue'
import Custom from './Entity/Custom.vue'
import Lane from './Entity/Lane.vue'

export default {
	props: ['entity', 'selected'],
	components: { Planet, Station, Jump, Star, Field, Custom, Lane },
	methods: {
		percentage(c) {
			return (c * 100) + '%'
		}	
	},
	computed: {
		styleObject() {
			if(this.entity.type === 'lane') {
				return {
					height: "100%",
					width: "100%"
				}
			}
			else {
				return {
					top: this.percentage(this.entity.position.y),
					left: this.percentage(this.entity.position.x)
				}
			}
		},
		ifSelected() {
			if(this.selected && this.selected.id === this.entity.id)
				return { active: true, entity: true }
			else return { active: false, entity: true }
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
	pointer-events none

.active
	text-shadow 0 0 5px yellow



</style>
