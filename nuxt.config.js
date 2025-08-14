//./nuxt.config.js

/*
$ cloudflare create
scaffolded file linked
https://nuxt.com/docs/api/configuration/nuxt-config

configuration object we'll populate, submit, and export the result
replaced common declarative structure with this imperitive pattern
to be able to group subject areas together and comment them out individually for testing
*/
const configuration = {
	modules: [],
	vue: {compilerOptions: {}},
	vite: {plugins: []},
	app: {head: {link: []}},
}

//for Nuxt and Nitro
configuration.compatibilityDate = '2025-06-10'//pin Nitro and other Nuxt modules to follow this date of behavior to include (or avoid) breaking changes
configuration.devtools = {enabled: true}//enable the Nuxt devtools extension in the browser when running locally

//for build analysis and visualization
configuration.build = {
	analyze: {//enable Nuxt’s built-in analyzer, which uses Rollup Plugin Visualizer under the hood
		template: 'treemap',//try out "sunburst", "treemap", "network", "raw-data", or "list"
		brotliSize: true,//current browsers downloading from Cloudflare will use Brotli compression
	},
}
configuration.analyzeDir = 'size'//put the report files in a folder named "size" rather than .nuxt/analyze

//for Cloudflare Workers
configuration.modules.push('nitro-cloudflare-dev')//run locally with a Miniflare Wrangler development proxy
configuration.nitro = {
	preset: 'cloudflare_module',//tell Nitro to build for Cloudflare Workers
	cloudflare: {
		deployConfig: true,//tell Nitro to generate Wrangler settings from its defaults and our wrangler.jsonc file
		nodeCompat: true,//bundle in compatability polyfills for core Node modules; this is about Node compatability at *build* time
	},
}

//added to solve error on npm run build about ES2019 not including BigInt literals
configuration.nitro.esbuild = {
	options: {target: 'esnext'},
}

//for tailwind
configuration.modules.push('@nuxtjs/tailwindcss')
configuration.tailwindcss = {cssPath: '~/assets/css/style.css'}

//for google fonts
configuration.app.head.link.push({
	rel: 'stylesheet',
	href: 'https://fonts.googleapis.com/css2?' +
		'family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
})

//for vector icon instead of favicon.ico file
configuration.app.head.link.push({
	rel: 'icon',
	type: 'image/svg+xml',
	href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="%239fffe0"/></svg>',
})

export default defineNuxtConfig(configuration)
