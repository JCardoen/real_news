<template>
	<v-container grid-list-xs>
		<v-layout row wrap>
			<v-flex xs12 md3 :key="country" v-for="country in countries" m5>
				<v-card>
					<v-card-title>
						<h2>{{ country | capslock }}</h2>
					</v-card-title>
					<v-card-actions>
						<v-btn :country="country" v-on:click="showNewsFromCountry($event)" flat>View news</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import Footer from '@/components/Footer';
	import Header from '@/components/Header';
	export default {
		name: 'IndexCountries',
		components: {
			'v-header': Header,
			'v-footer': Footer
		},
		data() {
			return {
				// Countries https://newsapi.org/docs/endpoints/top-headlines
				countries: {
					AR: 'Argentina',
					AU: 'Australia',
					AT: 'Austria',
					BE: 'Belgium',
					BR: 'Brazil',
					BG: 'Bulgaria',
					CA: 'Canada',
					CN: 'China',
					CO: 'Colombia',
					CU: 'Cuba',
					CZ: 'Czech Republic',
					DK: 'Denmark',
					EG: 'Egypt',
					FR: 'France',
					DE: 'Germany',
					GR: 'Greece',
					GB: 'United Kingdom',
					HK: 'Hong Kong',
					HU: 'Hungary',
					IN: 'India',
					ID: 'Indonesia',
					IE: 'Ireland',
					IL: 'Israel',
					IT: 'Italy',
					JP: 'Japan',
					KR: 'Korea',
					LV: 'Latvia',
					LT: 'Lithuania',
					LU: 'Luxembourg',
					MX: 'Mexico',
					MA: 'Morocco',
					NL: 'Netherlands',
					NZ: 'New Zealand',
					NI: 'Nicaragua',
					NG: 'Nigeria',
					NO: 'Norway',
					PL: 'Poland',
					PT: 'Portugal',
					RO: 'Romania',
					RU: 'Russian Federation',
					SA: 'Saudi Arabia',
					SG: 'Singapore',
					SK: 'Slovakia',
					SI: 'Slovenia',
					SE: 'Sweden',
					CH: 'Switzerland',
					TH: 'Thailand',
					TR: 'Turkey',
					UA: 'Ukraine',
					AE: 'United Arab Emirates',
					US: 'United States'
				}
			};
		},
		methods: {
			showNewsFromCountry: function(event) {
				let element = event.currentTarget;
				let country = element.getAttribute('country');
				let index = Object.keys(this.countries).find(
					key => this.countries[key] === country
				);
				this.$router.push({
					name: 'ShowCountryNews',
					params: {
						country: index
					}
				});
			}
		}
	};
</script>
