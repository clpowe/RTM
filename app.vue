<script setup>
	import '@unocss/reset/tailwind-compat.css'
	import 'virtual:uno.css'
	import 'primeicons/primeicons.css'

	const isDark = usePreferredDark()

	const favicon = computed(() => (isDark.value ? 'dark.svg' : 'light.svg'))

	useFavicon(favicon)
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
	html {
		min-height: 80px;
	}

	.content-grid {
		--padding-inline: 1rem;
		--content-max-width: 70ch;
		--breakout-max-width: 85ch;

		--breakout-size: calc(
			(var(--breakout-max-width) - var(--content-max-width)) / 2
		);

		display: grid;
		grid-template-columns:
			[full-width-start] minmax(var(--padding-inline), 1fr)
			[breakout-start] minmax(0, var(--breakout-size))
			[content-start] min(
				100% - var(--padding-inline) * 2,
				var(--content-max-width)
			)
			[content-end]
			minmax(0, var(--breakout-size)) [breakout-end]
			minmax(var(--padding-inline), 1fr) [full-width-end];
	}

	.content-grid > *,
	.full-width > * {
		grid-column: content;
	}

	.content-grid > .breakout {
		grid-column: breakout;
	}

	.content-grid > .full-width {
		grid-column: full-width;
	}

	img.full-width {
		width: 100%;
		max-height: 45vh;
		object-fit: cover;
	}

	:root {
		--font-family: 'Inter', sans-serif;

		--size-3: 1rem;

		--fs-300: clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem);
		--fs-400: clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem);
		--fs-500: clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem);
		--fs-600: clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem);
		--fs-700: clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem);
		--fs-800: clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem);
		--fs-900: clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem);

		--clr-primary-300: hsl(219, 76%, 55%);
		--clr-primary-400: hsl(219, 76%, 40%);
		--clr-primary-500: hsl(219, 76%, 25%);
		--clr-secondary-300: hsl(358, 90%, 45%);
		--clr-secondary-400: hsl(358, 90%, 30%);
		--clr-secondary-500: hsl(358, 90%, 15%);
		--clr-accent-200: hsl(358, 85%, 80%);
		--clr-accent-300: hsl(358, 72%, 65%);
		--clr-accent-400: hsl(358, 72%, 50%);
		--clr-accent-500: hsl(358, 72%, 35%);

		--clr-black-200: hsl(0, 0%, 80%);
		--clr-black-400: hsl(0, 0%, 40%);
		--clr-black-500: hsl(0, 0%, 7%);

		--primary-50: 219 240 255;
		--primary-100: 189 227 255;
		--primary-200: 117 198 255;
		--primary-300: 51 170 255;
		--primary-400: 0 137 235;
		--primary-500: 0 96 166;
		--primary-600: 0 77 133;
		--primary-700: 0 60 102;
		--primary-800: 0 39 66;
		--primary-900: 0 21 36;
		--primary-950: 0 9 15;
		--surface-0: 255 255 255;
		--surface-50: 248 250 252;
		--surface-100: 241 245 249;
		--surface-200: 226 232 240;
		--surface-300: 203 213 225;
		--surface-400: 148 163 184;
		--surface-500: 100 116 139;
		--surface-600: 71 85 105;
		--surface-700: 45 55 72;
		--surface-800: 30 41 59;
		--surface-900: 15 23 42;
		--surface-950: 3 6 23;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	figure {
		margin: 0;
	}

	body {
		margin: 0;
		font-family: var(--font-family);
		font-size: var(--fs-400);
		line-height: 1.6;
	}

	.site-title {
		margin: 0;
		font-size: var(--fs-900);
		line-height: 0.9;
		text-transform: uppercase;
		font-weight: 900;
		text-wrap: balance;
	}

	h1 {
		font-size: var(--fs-900);
		line-height: 0.9;
		text-wrap: balance;
		font-weight: 900;
		text-transform: uppercase;
	}

	h2,
	.section-title {
		font-size: var(--fs-800);
		line-height: 0.9;
		text-wrap: balance;
		font-weight: 900;
		text-transform: uppercase;
	}

	h1 span {
		color: var(--clr-secondary-400);
	}

	h2 span {
		color: var(--clr-secondary-400);
	}

	h3 {
		font-size: var(--fs-600);
		line-height: 0.9;
		text-wrap: balance;
		font-weight: 900;
		text-transform: uppercase;
	}
	h4 {
		font-size: var(--fs-500);
		line-height: 0.9;
		text-wrap: balance;
	}

	p {
		margin: 0;
	}

	.text-red {
		color: var(--clr-secondary-400);
	}

	.bg-primary {
		background: var(--clr-primary-500);
	}

	.margin-none {
		margin: 0;
	}

	img {
		max-width: 100%;
		height: auto;
		vertical-align: middle;
		font-size: italic;
		background-repeat: no-repeat;
		background-size: cover;
		shape-margin: 0.75rem;
	}

	.flow > * + * {
		margin-top: var(--flow-spacing, 1em);
	}
</style>
