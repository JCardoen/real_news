import Vue from 'vue'
import Router from 'vue-router'
import Countries from '@/components/Countries'
import Sources from '@/components/Sources'
import Index from '@/components/Index'
import Bookmarks from '@/components/Bookmarks'
import ShowCountryNews from '@/components/ShowCountryNews'
import ShowSourceNews from '@/components/ShowSourceNews'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/sources',
			name: 'Sources',
			component: Sources
		},
		{
			path: '/news/:source',
			name: 'ShowSourceNews',
			component: ShowSourceNews,
			props: true
		},
		{
			path: '/country/:country',
			name: 'ShowCountryNews',
			component: ShowCountryNews,
			props: true
		},
		{
			path: '/bookmarks',
			name: 'Bookmarks',
			component: Bookmarks,
		}
	]
})
