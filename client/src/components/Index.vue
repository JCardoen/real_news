<template>
	<v-content>
		<v-container>
			<v-layout row wrap align-center>
				<v-flex xs12>
					<v-header></v-header>
				</v-flex>
				<v-countries></v-countries>
				<v-footer></v-footer>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
	import Footer from '@/components/Footer';
	import Header from '@/components/Header';
	import Countries from '@/components/Countries';
	export default {
		name: 'Index',
		components: {
			'v-header': Header,
			'v-footer': Footer,
			'v-countries': Countries
		}
	};
</script>
