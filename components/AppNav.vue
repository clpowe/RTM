<template>
	<header class="content-grid">
		<div class="navbar bg-base-100">
			<div class="flex-1">
				<NuxtLink class="text-xl" uppercase flex gap-2 items-center font-bold
					><LogoDark text-4xl mb-0 />
					<h1 class="hidden sm:block" text-xl>Revealing Truth Ministries</h1>
					<h1 block sm="hidden" text-xl>RTM</h1>
					{{ '' }}
				</NuxtLink>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal px-1 gap-2">
					<li>
						<NuxtLink
							to="https://revealingtruth.online.church/"
							class="btn btn-sm"
							target="_blank"
							>Watch Live</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="https://pushpay.com/g/revealingtruth?appVersion=&clickOrigin=&itemId=&utm_medium=social&utm_source=linktree&utm_campaign=giving&ltclid=6bff1693-6209-48cf-92f2-4ad8dc377d3c"
							target="_blank"
							class="btn btn-sm"
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
</script>

<style lang="scss" scoped></style>
