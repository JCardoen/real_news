/* eslint-disable */
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/';
const QUERY_API_KEY = 'apiKey=6c55becfa7364d179d8285d256c376aa';

export default {
	async getTopHeadlines(country) {
		const queryString = BASE_URL + 'v2/top-headlines?country=' + country + '&' + QUERY_API_KEY;
		let response = await axios.get(queryString).then(response => {
			return response
		})
		return response;
	},
	async getEverythingFromSource(source) {
		const queryString = BASE_URL + 'v2/everything?q=' + source + '&' + QUERY_API_KEY;
		let response = await axios.get(queryString).then(response => {
			return response
		})
		return response;
	},
	async getSources() {
		const queryString = BASE_URL + 'v2/sources?' + QUERY_API_KEY;
		let response = await axios.get(queryString).then(response => {
			return response
		})
		return response;
	},
}
