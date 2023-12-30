<script setup>
	import LogoLight from '~/assets/logo-light.svg'

	const date = new Date()
</script>

<template>
	<footer class="content-grid bg-black p-4" text="white">
		<div flex flex-col items-center justify-between>
			<div flex flex-col sm:flex-row items="center" gap-2>
				<LogoLight text-4xl mb-0 />
				<div>Revealing Truth Ministries {{ date.getFullYear() }}</div>
			</div>
			<div flex text-3xl gap-2>
				<div class="i-bxl:facebook-square" text-white></div>
				<div class="i-bxl:instagram-alt"></div>
			</div>
		</div>
	</footer>
</template>
