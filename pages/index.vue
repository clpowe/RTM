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
				<p grow whitespace-nowrap class="editable">An RTM Production</p>

				<p grow whitespace-nowrap class="editable">Sun 12.24.2023</p>
			</div>
			<h2 class="homeHeader" text-center>{{ fv![0].title }}</h2>

			<div class="cont">
				<iframe
					class="video"
					:src="fv![0].source"
					:title="fv![0].title"
					frameborder="1"
					color="white"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					controls="0"
				></iframe>
			</div>
		</article>
		<section class="full-width bg-black" py="12 md:16">
			<div
				class="content-grid max-w-[60ch] editable"
				text="white"
				py-16
				mx-auto
			>
				<p italic text="xl center">
					...I will lay upon it health and healing, and I will cure them and
					will reveal to them the abundance of peace (prosperity, security,
					stability) and truth.
				</p>
				<p text="2xl center" mt-4 font-bold class="editable">
					Jeremiah 33:6 (AMP)
				</p>
			</div>
		</section>
		<article class="py-20">
			<h2 class="editable" mb-4>Locations</h2>
			<Accordion :activeIndex="0" multiple>
				<template #expandicon>
					<div class="i-heroicons-plus-circle text-7xl mr-6"></div>
				</template>
				<template #collapseicon>
					<div class="i-heroicons-minus-circle text-7xl mr-6"></div>
				</template>
				<AccordionTab v-for="location in data" class="bg-red">
					<template #header>
						<div>
							<h3 class="mb-2">{{ location.name }}</h3>
							<p class="font-400">{{ location.pastors }}</p>
						</div>
					</template>
					<LocationTile :location="location" />
				</AccordionTab>
			</Accordion>
		</article>
		<!-- <article class="" py="12 md:16 ">
			<div grid gap-4>
				<LocationTile :location="location" v-for="location in data" />
			</div>
		</article> -->
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

	const { data } = await useAsyncData('locations', () =>
		queryContent('/locations').find()
	)
	const { data: fv } = await useAsyncData('featuredVideo', () =>
		queryContent('/featured').find()
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
