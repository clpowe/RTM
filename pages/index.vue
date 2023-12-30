<template>
	<main class="content-grid">
		<article space-y="3 md:10" py="12 md:16">
			<div
				flex
				flex-col
				sm:flex-row
				gap-0
				sm:gap-4
				max-w-lg
				uppercase
				mx-auto
				text-center
			>
				<p grow whitespace-nowrap>An RTM Production</p>
				<UDivider
					class="hidden sm:flex"
					:ui="{ border: { size: { horizontal: 'border-t-3' } } }"
				/>
				<p grow whitespace-nowrap>Sun 12.24.2023</p>
			</div>
			<h2 editable class="homeHeader" text-center>No Jesus, No Christmas</h2>
			<div class="cont">
				<iframe
					class="video"
					src="https://www.youtube.com/embed/dXsCw_ED5iY?si=-XTHALO95TGmnGag"
					title="No Jesus, No Christmas"
					frameborder="1"
					color="white"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					controls="0"
				></iframe>
			</div>
		</article>
		<section class="full-width bg-black" py="12 md:16">
			<div class="content-grid max-w-[60ch]" text="white" py-16 mx-auto>
				<p italic text="xl center">
					...I will lay upon it health and healing, and I will cure them and
					will reveal to them the abundance of peace (prosperity, security,
					stability) and truth.
				</p>
				<p text="2xl center" mt-4 font-bold>Jeremiah 33:6 (AMP)</p>
			</div>
		</section>
		<article class="flow space-y-8" py="12 md:16">
			<h2>Locations</h2>
			<div v-for="location in data">
				<LocationTile :location="location" />
			</div>
		</article>
	</main>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: 'Revealing Truth Ministries',
		description:
			'We are Revealing Truth Ministries - Where lives are changed, communities are impacted and Christ is put on display through the Simple Truth of God’s Word.',
		ogTitle: 'Revealing Truth Ministries',
		ogDescription:
			'We are Revealing Truth Ministries - Where lives are changed, communities are impacted and Christ is put on display through the Simple Truth of God’s Word.',
		ogImage: '[og:image]',
		ogUrl: '[og:url]',
		twitterTitle: 'Revealing Truth Ministries',
		twitterDescription:
			'We are Revealing Truth Ministries - Where lives are changed, communities are impacted and Christ is put on display through the Simple Truth of God’s Word.',
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

	type Location = {
		_path: string
		_dir: string
		_draft: boolean
		_partial: boolean
		_locale: string
		name: string
		pastors: string
		address: string
		service_times: ServiceTime[]
		_id: string
		_type: string
		title: string
		_source: string
		_file: string
		_extension: string
	}

	type ServiceTime = {
		day: string
		time: string
	}

	const { data } = await useAsyncData('locations', () =>
		queryContent('/locations').find()
	)
</script>

<style scoped>
	.homeHeader {
		font-size: clamp(1.5rem, calc(0.5rem + 8vw), 7rem);
		line-height: 1em;
		font-weight: 900;
		text-wrap: balance;
	}
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
