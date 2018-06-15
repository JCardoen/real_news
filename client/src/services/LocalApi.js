import axios from 'axios'

const BASE_URL = 'http://localhost:8081'

export default {
	async bookmarkArticle(article) {
		await axios.post(BASE_URL + '/bookmark/article', {
			title: article.title,
			author: article.author,
			description: article.description,
			urlToImage: article.urlToImage == '' ? '' : article.urlToImage,
			source: article.title,
			publishedAt: article.publishedAt,
			url: article.url,
		}).then(
			console.log('Added article')
		);
	},
	async getArticles() {
		let response = await axios.get(BASE_URL + '/local/articles')
			.then((response) => { return response })
		return response;
	},
	async removeBookmark(id) {
		await axios.delete(BASE_URL + '/local/article/' + id).then(
			console.log('Removed article')
		);
	}
}
