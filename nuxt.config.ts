//./nuxt.config.js
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',//start
	devtools: {
		enabled: true,//start
	},
	nitro: {
		preset: 'cloudflare_module',//start
		cloudflare: {
			deployConfig: true,//start
			nodeCompat: true,//start
		},
	},
	modules: [
		'nitro-cloudflare-dev',//start
		'@nuxtjs/tailwindcss',//from nuxt tailwind
	],
	css: [
		'~/assets/css/main.css',//for tailwind to get styles to cascade
	],
	app: {
		head: {
			link: [
				//fonts from google fonts, basic latin characters
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?' + (
									'family=Noto+Sans:ital,wght@0,400;1,400;0,700;1,700' +
						'&family=Noto+Sans+Mono:ital,wght@0,400;1,400;0,700;1,700' +
										'&family=Roboto:ital,wght@0,400;1,400;0,500;1,500' +//note 500, tailwind semibold
						'&display=swap' +
						'&subset=latin,latin-ext'
					),
				},
			],
		},
	},
	build: {
		analyze: {//added for visualizer; enable Nuxt’s built-in analyzer, which uses Rollup Plugin Visualizer under the hood
			template: 'treemap',//try out "sunburst", "treemap", "network", "raw-data", or "list"
			brotliSize: true,//current browsers downloading from Cloudflare will use Brotli compression
		},
	},
	analyzeDir: 'size',//added for visualizer; put the report files in a folder named "size" rather than .nuxt/analyze
})
