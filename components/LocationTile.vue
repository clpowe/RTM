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
	<figure class="card bg-slate-100 p-4 rounded-xl">
		<div>
			<h3 text-2xl>{{ location.name }}</h3>
			<!-- <p>{{ location.pastors }}</p> -->
		</div>
		<div>
			<!-- <h4 font="bold">Address</h4> -->
			<p>{{ location.address }}</p>
		</div>
		<div class="space-y-2 leading-none">
			<h5 text-xl font="bold">Times</h5>

			<div v-for="service in location.service_times">
				<p>
					<span font="bold">
						{{ service['day'] }}
					</span>
					- {{ service['time'] }}
				</p>
			</div>
		</div>
	</figure>
</template>

<style lang="scss" scoped>
	.card {
		display: grid;
	}
</style>
