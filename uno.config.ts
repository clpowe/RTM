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
			themes: ['light']
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
