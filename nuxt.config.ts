// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxt/ui', '@nuxt/content'],
	colorMode: {
		preference: 'light'
	},
	content: {
		api: {
			baseURL: '/api/_my_content'
		}
	}
})
