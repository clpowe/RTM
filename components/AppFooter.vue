<script setup>
	import LogoLight from '~/assets/logo-light.svg'

	const formatted = useDateFormat(useNow(), 'YYYY')
</script>

<template>
	<div class="content-grid bg-slate-950 text-white">
		<footer class="flex justify-between p-10 text-neutral-content">
			<div>
				<aside class="flex items-center">
					<LogoLight text-6xl />
					<p uppercase>Revealing Truth Ministries</p>
				</aside>
				<p text-sm>
					© {{ formatted }} Revealing Truth Ministries, All rights reserved
				</p>
			</div>
			<nav>
				<header font-bold>Social</header>
				<div class="grid grid-flow-col gap-4 text-4xl">
					<a><div class="i-bxl:facebook-square" text-white></div></a>
					<a><div class="i-bxl:instagram-alt"></div></a>
				</div>
			</nav>
		</footer>
	</div>
</template>
