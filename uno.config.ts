// uno.config.ts
import {
	defineConfig,
	presetTypography,
	presetUno,
	presetAttributify,
	presetWebFonts,
	presetIcons
} from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
	presets: [
		presetIcons(),
		presetAttributify(), // required when using attributify mode
		presetUno(), // required
		presetTypography(),
		presetDaisy({
			themes: [
				{
					mytheme: {
						primary: '#2563eb',
						secondary: '#1e40af',
						accent: '#D9e021',
						neutral: '#1f2937',
						'base-100': '#f3f4f6',
						info: '#1f2937',
						success: '#a3e635',
						warning: '#facc15',
						error: '#e11d48'
					}
				}
			]
		}),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: 'Roboto:100,200,300,400,500,600,700,800,900',
				mono: 'Fira Sans'
			}
		})
	]
})
