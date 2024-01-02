// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxt/content', 'nuxt-svgo'],

	content: {
		api: {
			baseURL: '/api/_my_content'
		}
	}
})
