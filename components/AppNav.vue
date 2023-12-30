<template>
	<header class="content-grid">
		<nav class="flex items-center py-4">
			<NuxtLink class="text-xl" uppercase flex gap-2 items-center font-bold
				><LogoDark text-4xl mb-0 />
				<h1 class="hidden sm:block" text-xl>Revealing Truth Ministries</h1>
				<h1 block sm="hidden" text-xl>RTM</h1>
				{{ '' }}
			</NuxtLink>
			<div class="ml-auto flex gap-4">
				<UButton
					to="https://revealingtruth.online.church/"
					size="sm"
					target="_blank"
					>Watch Live</UButton
				>
				<UButton
					to="https://pushpay.com/g/revealingtruth?appVersion=&clickOrigin=&itemId=&utm_medium=social&utm_source=linktree&utm_campaign=giving&ltclid=6bff1693-6209-48cf-92f2-4ad8dc377d3c"
					target="_blank"
					size="sm"
					>Give Now</UButton
				>
			</div>
		</nav>
	</header>
</template>

<script setup>
	import LogoDark from '~/assets/logo-dark.svg'
</script>

<style lang="scss" scoped></style>
