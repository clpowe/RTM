import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxt/content',
		'nuxt-svgo',
		'nuxt-primevue'
	],
	primevue: {
		unstyled: true,
		importPT: { from: path.resolve(__dirname, './presets/lara/') }
	},
	content: {
		api: {
			baseURL: '/api/_my_content'
		}
	}
})
