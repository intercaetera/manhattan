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
		}
	}
}
</script>

<style lang='stylus' scoped>

</style>
