<template>
	<header class="content-grid">
		<div class="flex py-4">
			<div class="flex-1">
				<NuxtLink class="text-xl" uppercase flex gap-2 items-center font-bold
					><LogoDark text-4xl mb-0 />
					<h1 class="hidden sm:block" text-xl>Revealing Truth Ministries</h1>
					<h1 block sm="hidden" text-xl>RTM</h1>
					{{ '' }}
				</NuxtLink>
			</div>

			<div class="">
				<ul class="flex gap-2">
					<li>
						<NuxtLink
							to="https://revealingtruth.online.church/"
							target="_blank"
							class="text-white bg-primary-500 border border-primary-500 items-center inline-flex text-center align-bottom justify-center leading-[normal] text-sm py-2 px-3 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50' hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300 transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none rounded-md"
							>Watch Live</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="https://pushpay.com/g/revealingtruth?appVersion=&clickOrigin=&itemId=&utm_medium=social&utm_source=linktree&utm_campaign=giving&ltclid=6bff1693-6209-48cf-92f2-4ad8dc377d3c"
							target="_blank"
							class="text-white bg-primary-500 border border-primary-500 items-center inline-flex text-center align-bottom justify-center leading-[normal] text-sm py-2 px-3 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50' hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300 transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none rounded-md"
							>Give Now</NuxtLink
						>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup>
	import LogoDark from '~/assets/logo-dark.svg'

	const visibleTop = ref(false)
</script>

<style lang="scss" scoped></style>
