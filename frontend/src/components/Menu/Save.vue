<template lang='pug'>
button(@click='save') Save
</template>

<script>
import { EventBus } from '@/eventbus'

export default {
	props: ['id'],
	methods: {
		save(e) {
			EventBus.$emit('save')
			console.log(this.$router.push(this.id))
		}
	}
}
</script>

<style lang='stylus' scoped>

</style>
