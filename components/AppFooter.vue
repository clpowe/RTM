<script setup>
	import LogoLight from '~/assets/logo-light.svg'

	const date = new Date()
</script>

<template>
	<footer class="content-grid bg-black py-4" text="white">
		<div flex flex-wrap items-center justify-between>
			<div flex flex-wrap items-center>
				<LogoLight text-4xl />
				<div>Revealing Truth Ministries {{ date.getFullYear() }}</div>
			</div>
			<div flex flex-wrap text-4xl gap-4>
				<div class="i-bxl:facebook-square" text-white></div>
				<div class="i-bxl:instagram-alt"></div>
			</div>
		</div>
	</footer>
</template>
