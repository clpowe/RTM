<template>
	<div class="parent">
		<AppNav />
		<slot />
		<AppFooter />
	</div>
</template>

<style>
	.parent {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100dvh;
	}
</style>
