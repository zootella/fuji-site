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
				//fonts from google fonts
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
				},
				//favicon instead of .ico file
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="%239fffe0"/></svg>',
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
