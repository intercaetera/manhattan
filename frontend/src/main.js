import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vMap from './components/Map.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: vMap },
	{ path: '/:id', component: vMap }
]

const router = new VueRouter({ routes })

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
