//./tailwind.config.js - our control panel for adjusting and augmenting tailwind's defaults

import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

export default {

	//tailwind needs to know which files to scan for class names so it can tree-shake unused CSS
	content: [
		'./nuxt.config.{js,ts}',
		'./app.vue',//we don't use tailwind class names in these two files, but listing them here is standard
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.{vue,js,ts}',
		'./pages/**/*.{vue,js,ts}',
		'./plugins/**/*.{js,ts}',
	],

	//default theme customizations and extensions
	theme: {
		extend: {
			fontFamily: {//you can confirm these work by adding 'Papyrus' to the start of any list, lol
				helvetica: [
					'"Helvetica Neue"',//packaged font
					...defaultTheme.fontFamily.sans,//all the default system fallbacks
				],
				sans: [
					...defaultTheme.fontFamily.sans,
				],
				mono: [
					'"IBM Plex Mono"',
					...defaultTheme.fontFamily.mono,
				],
			},
		},
	},

	//register custom utilities or extra pseudo-classes
	plugins: [
		forms,//normalize and styles form controls to inherit site typography and match Tailwind defaults
	],

	//here also is where we could add future flags and experimental features
}
