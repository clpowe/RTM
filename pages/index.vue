<template>
	<main class="content-grid space-y-12">
		<div>
			<h1>Revealing Truth Ministies</h1>
			<p text="base" class="max-w-[70ch]">
				...I will lay upon it health and healing, and I will cure them and will
				reveal to them the abundance of peace (prosperity, security, stability)
				and truth.
			</p>
		</div>
		<article>
			<h2>Recent Sermon</h2>
			<div class="cont">
				<iframe
					class="video"
					src="https://www.youtube.com/embed/mXtx0s7dQ-s?si=aWgHj7o5zPBd02fp"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
		</article>
		<article class="flow space-y-8">
			<h2>Locations</h2>
			<div class="space-y-2">
				<div>
					<h3>Tampa</h3>
					<p>Pastors Bryan & Rashida Powe</p>
				</div>
				<div>
					<h4 font="bold">Address</h4>
					<p>5201 N. Armenia Ave. Tampa, FL 33603</p>
				</div>
				<div class="space-y-2 leading-none">
					<h4 font="bold">Times</h4>
					<div class="flex">
						<p font="bold">Sunday:</p>
						<p>9:00 am</p>
					</div>
					<div class="flex">
						<p font="bold">Sunday:</p>
						<p>11:00 am</p>
					</div>
					<div class="flex">
						<p font="bold">Wednesday:</p>
						<p>7:00 pm</p>
					</div>
				</div>
			</div>
			<div class="space-y-2">
				<div>
					<h3>St Pete</h3>
					<p>Pastors Lamar & Yeneka Mills</p>
				</div>
				<div>
					<h4 font="bold">Address</h4>
					<p>2644 Cypress Ridge Blvd., Wesley Chapel, FL 33544</p>
				</div>
				<div>
					<h4>Times</h4>
					<div class="flex">
						<p font="bold">Sunday</p>
						-
						<p>11:00 am</p>
					</div>
				</div>
			</div>
			<div class="space-y-2">
				<div>
					<h3>Wesley Chaple</h3>
					<p>Pastors Benjamin & Greta Smith</p>
				</div>
				<div>
					<h4 font="bold">Address</h4>
					<p>
						Bay Village Shopping Center, 2220 62nd Ave S, St. Petersburg, FL
						33712
					</p>
				</div>
				<div>
					<h4 font="bold">Times</h4>
					<div class="flex">
						<p font="bold">Sunday:</p>

						<p>9:00 am</p>
					</div>
				</div>
			</div>
		</article>
	</main>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: 'Revealing Truth Ministries',
		description: '[description]',
		ogTitle: '[og:title]',
		ogDescription: '[og:description]',
		ogImage: '[og:image]',
		ogUrl: '[og:url]',
		twitterTitle: '[twitter:title]',
		twitterDescription: '[twitter:description]',
		twitterImage: '[twitter:image]',
		twitterCard: 'summary'
	})

	useHead({
		htmlAttrs: {
			lang: 'en'
		},
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				href: '/favicon.png'
			}
		]
	})
</script>

<style scoped>
	.cont {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
	}

	.video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
