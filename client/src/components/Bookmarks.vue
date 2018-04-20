<template>
	<v-content>
		<v-container>
			<v-layout row wrap align-center>
				<v-flex xs12>
					<v-header></v-header>
				</v-flex>
				<v-spacer></v-spacer>
				<v-flex xs12>
					<h1>International news</h1>
				</v-flex>
				<v-flex xs12 md3>
					<v-text-field type="text" label="Filter items" v-model="search"></v-text-field>
				</v-flex>
				<v-spacer></v-spacer>
				<v-newsgrid v-if="filteredArticles.length > 0" :articles="filteredArticles" :handler="handler" :buttonText="buttonText"></v-newsgrid>
				<v-flex xs12 md12 v-else>
					<p>No articles found</p>
				</v-flex>
				<v-footer></v-footer>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
	import LocalApi from '../services/LocalApi';
	import RemoteApi from '../services/RemoteApi';
	import Footer from '@/components/Footer';
	import NewsGrid from '@/components/NewsGrid';
	import Header from '@/components/Header';
	export default {
		name: 'ShowCountryNews',
		components: {
			'v-header': Header,
			'v-newsgrid': NewsGrid,
			'v-footer': Footer
		},
		data() {
			return {
				search: '',
				buttonText: 'Remove Bookmark',
				// Countries ty https://gist.github.com/incredimike/1469814
				filteredArticles: [],
				articles: []
			};
		},
		watch: {
			search: function() {
				this.filterArticles();
			}
		},
		created() {
			this.getBookmarks();
		},
		methods: {
			handler: async function(event) {
				let id = event.currentTarget.getAttribute('id');
				let selectedArticle = this.filteredArticles.filter((article) => {
					return article._id == id;
				})
				this.filteredArticles.splice(this.filteredArticles.indexOf(selectedArticle[0]), 1);
				await LocalApi.removeBookmark(id);
			},
			async getBookmarks() {
				const response = await LocalApi.getArticles();
				this.articles = response.data.articles;
				this.filteredArticles = this.articles;
			},
			filterArticles: function() {
				const self = this;
				this.filteredArticles = this.articles.filter(function(article) {
					if (article.description !== null)
						return (
							article.description
							.toLowerCase()
							.indexOf(self.search.toLowerCase()) >= 0
						);
				});
			}
		},
		computed: {}
	};
</script>
