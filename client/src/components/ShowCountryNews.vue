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
					<v-text-field type="text" label="Filter items based on text" v-model='search'></v-text-field>
				</v-flex>
				<v-spacer></v-spacer>
				<v-newsgrid v-if='articles' :articles='filteredArticles' :handler='handler'></v-newsgrid>
				<p v-else>No articles found</p>
				<v-footer></v-footer>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
	import RemoteApi from '../services/RemoteApi';
	import LocalApi from '../services/LocalApi';
	import Footer from '@/components/Footer';
	import Header from '@/components/Header';
	import NewsGrid from '@/components/NewsGrid';
	export default {
		name: 'ShowCountryNews',
		components: {
			'v-newsgrid': NewsGrid,
			'v-header': Header,
			'v-footer': Footer
		},
		data() {
			return {
				search: '',
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
			this.getTopHeadlines();
		},
		methods: {
			handler: function(event) {
				const allArticles = this.filteredArticles;
				let url = event.currentTarget.getAttribute('url');
				let id = event.currentTarget.getAttribute('id');
				let bookmarked = event.currentTarget.getAttribute('bookmarked');
				if (bookmarked) {
					LocalApi.removeBookmark(id);
					event.currentTarget.querySelector('.btn__content').innerHTML = 'Bookmark';
				} else {
					let selectedArticle = allArticles.filter(article => {
						return article.url == url;
					});
					LocalApi.bookmarkArticle(selectedArticle[0]);
					event.currentTarget.setAttribute('bookmarked', true);
					event.currentTarget.querySelector('.btn__content').innerHTML = 'Remove Bookmark';
				}
			},
			async getTopHeadlines() {
				const response = await RemoteApi.getTopHeadlines(
					this.$route.params.country
				);
				this.articles = response.data.articles;
				this.filteredArticles = this.articles;
				console.log(response.data);
			},
			filterArticles: function() {
				const self = this;
				this.filteredArticles = this.articles.filter(article => {
					console.log(article);
					if (article.description !== null)
						return (
							article.description
							.toLowerCase()
							.indexOf(self.search.toLowerCase()) >= 0
						);
				});
			}
		},
	};
</script>
