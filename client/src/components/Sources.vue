<template>
	<v-content>
		<v-container>
			<v-layout row wrap align-center>
				<v-flex xs12>
					<v-header></v-header>
				</v-flex>
				<v-flex xs12 md2>
					<v-select :items="categories" v-model="selectedCategory" label="Select" single-line>
					</v-select>
				</v-flex>
				<v-spacer></v-spacer>
			</v-layout>
		</v-container>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12 md4 :key="source.id" v-for="source in filteredSources">
					<v-card>
						<v-card-title primary-title>
							<div>
								<h3 class="headline mb-0">{{ source.name}}</h3>
								<span class="grey--text">{{ source.language }}</span><br>
								<span class="grey--text">{{ source.country }}</span><br>
								<div>{{ source.description }}</div>
							</div>
						</v-card-title>
						<v-card-actions>
							<v-btn :id="source.id" v-on:click="showNewsFromSource($event)" flat color="orange">Show News</v-btn>
							<v-btn :href="source.url" flat color="orange">Visit site</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
	import RemoteApi from '../services/RemoteApi';
	import Footer from '@/components/Footer';
	import Header from '@/components/Header';
	export default {
		name: 'IndexSources',
		components: {
			'v-header': Header,
			'v-footer': Footer
		},
		data() {
			return {
				sources: [],
				selectedCategory: '',
				categories: [],
				filteredSources: []
			};
		},
		created() {
			this.getSources();
		},
		watch: {
			selectedCategory: function() {
				this.filterSources();
			}
		},
		methods: {
			async getSources() {
				const response = await RemoteApi.getSources();
				this.sources = response.data.sources;
				this.filteredSources = this.sources;
				const self = this;
				this.sources.forEach(el => {
					if (self.categories.indexOf(el.category) == -1) {
						self.categories.push(el.category);
					}
				});
			},
			showNewsFromSource: function(event) {
				let element = event.currentTarget;
				let source = element.getAttribute('id');
				this.$router.push({
					name: 'ShowSourceNews',
					params: {
						source: source
					}
				});
			},
			filterSources: function() {
				const self = this;
				this.filteredSources = this.sources.filter( el => {
					if (el.categroy !== null)
						return (
							el.category
							.toLowerCase()
							.indexOf(self.selectedCategory.toLowerCase()) >= 0
						);
				});
			}
		}
	};
</script>
