<script setup lang="ts">
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

	defineProps<{
		location: Location
	}>()
</script>

<template>
	<Card>
		<template #content>
			<div>
				<h4 text-xl font="bold">Address</h4>
				<p class="max-w-[45ch]">{{ location.address }}</p>
			</div>
			<div class="space-y-2 leading-none">
				<h4 text-xl font="bold">Service Times</h4>

				<div v-for="service in location.service_times">
					<p>
						<span font="bold">
							{{ service['day'] }}
						</span>
						- {{ service['time'] }}
					</p>
				</div>
			</div>
		</template>
	</Card>
</template>

<style lang="scss" scoped>
	.card {
		display: grid;
	}
</style>
