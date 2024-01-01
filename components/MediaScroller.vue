<script setup></script>

<template>
	<div class="media-scroller">
		<slot />
	</div>
</template>

<style scoped lang="scss">
	:root {
		--size-3: 1rem;
	}

	.media-scroller {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 90%;
		gap: var(--size-3);

		overflow-x: auto;
		overscroll-behavior-inline: contain;
	}

	@media (min-width: 640px) {
		.media-scroller {
			grid-auto-columns: 55%;
		}
	}

	@media (min-width: 768px) {
		.media-scroller {
			grid-auto-columns: 40%;
		}
	}
	@media (min-width: 1024px) {
		.media-scroller {
			grid-auto-columns: 30%;
		}
	}
</style>
