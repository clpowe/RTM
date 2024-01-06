<script setup>
	import LogoLight from '~/assets/logo-light.svg'

	const date = new Date()
</script>

<template>
	<div class="content-grid bg-neutral">
		<footer class="footer p-10 text-neutral-content">
			<aside class="flex items-center">
				<LogoLight text-4xl />
				<p>Revealing Truth Ministries {{ date.getFullYear() }}</p>
			</aside>
			<nav>
				<header class="footer-title">Social</header>
				<div class="grid grid-flow-col gap-4 text-4xl">
					<a><div class="i-bxl:facebook-square" text-white></div></a>
					<a><div class="i-bxl:instagram-alt"></div></a>
				</div>
			</nav>
		</footer>
	</div>
</template>
