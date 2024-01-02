<script setup lang="ts">
	const el = ref<HTMLElement | null>(null)
	let isDown = ref(false)
	let startX: number
	let scrollLeft: number

	function handleDown(e: any) {
		if (el.value) {
			isDown.value = true
			startX = e.pageX - el.value?.offsetLeft
			scrollLeft = el.value?.scrollLeft
		}
	}

	function handleLeave(e: any) {
		isDown.value = false
	}

	function handleUp(e: any) {
		isDown.value = false
	}

	function handleMove(e: any) {
		if (!isDown.value) return
		if (el.value) {
			const x = e.pageX - el.value.offsetLeft
			const walk = (x - startX) * 3
			el.value.scrollLeft = scrollLeft - walk
		}
	}
</script>

<template>
	<div
		class="media-scroller"
		@mousedown="handleDown"
		@mouseleave="handleLeave"
		@mouseup="handleUp"
		@mousemove.prevent="handleMove"
		:class="{ active: isDown }"
		ref="el"
	>
		<slot />
	</div>
</template>

<style scoped lang="scss">
	:root {
		--size-3: 1rem;
	}

	.media-scroller {
		display: grid;
		cursor: pointer;
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
			grid-auto-columns: 32%;
		}
	}

	.active {
		cursor: grabbing;
	}
</style>
