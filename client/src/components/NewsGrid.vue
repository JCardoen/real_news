<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex fill-height flexbox align-end fluid xs12 sm4 :key="article.url" v-for="article in articles">
				<v-card>
					<v-card-media class="white--text" height="200px" v-if="article.urlToImage" :src="article.urlToImage" :alt="article.title">
						<v-container fill-height fluid>
							<v-layout fill-height>
								<v-flex xs12 align-end flexbox>
									<span class="headline">{{ article.title }}</span>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card-media>
					<v-card-title>
						<div>
							<span class="grey--text">{{ article.publishedAt | formatDate }}</span><br>
							<span>{{ article.source.name }}</span><br>
							<span>{{ article.description }}</span>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn v-if="buttonText !== undefined" :bookmarked="false" :id="article._id" :url="article.url" @click="handler($event)" flat color="orange">{{ buttonText}}</v-btn>
						<v-btn v-else :bookmarked="false" :id="article._id" :url="article.url" @click="handler($event)" flat color="orange">Bookmark</v-btn>
						<v-btn :href="article.url" flat color="">View article</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props: ['articles', 'handler', 'buttonText'],
	}
</script>


