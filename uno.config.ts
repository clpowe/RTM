// uno.config.ts
import {
	defineConfig,
	presetTypography,
	presetUno,
	presetAttributify,
	presetWebFonts,
	presetIcons
} from 'unocss'

export default defineConfig({
	presets: [
		presetIcons(),
		presetAttributify(), // required when using attributify mode
		presetUno(), // required
		presetTypography(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: 'Roboto:100,200,300,400,500,600,700,800,900',
				mono: 'Fira Sans'
			}
		})
	]
})
