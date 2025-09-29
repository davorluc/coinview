<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { totalCoins, totalTrays } = data;
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-6 text-3xl font-bold">CoinView Dashboard</h1>

	<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		<div class="rounded-lg bg-white p-6 shadow-md">
			<h2 class="text-xl font-semibold text-gray-700">Total Coins</h2>
			<p class="text-4xl font-bold text-[#a31d1d]">{totalCoins}</p>
		</div>
		<div class="rounded-lg bg-white p-6 shadow-md">
			<h2 class="text-xl font-semibold text-gray-700">Total Trays</h2>
			<p class="text-4xl font-bold text-[#a31d1d]">{totalTrays}</p>
		</div>
	</div>

	<h2 class="mb-4 text-2xl font-bold">Find a Tray</h2>
	<form method="GET" action="/trays" class="mb-8 flex gap-2">
		<input
			type="text"
			name="q"
			placeholder="Enter tray ID..."
			class="flex-1 rounded border p-2 focus:border-transparent focus:ring-2 focus:ring-[#a31d1d]"
		/>
		<button
			type="submit"
			class="rounded bg-[#a31d1d] px-4 py-2 text-white transition-colors hover:bg-red-700"
		>
			Open Tray
		</button>
	</form>

	<!-- You can add more sections here, e.g., Recent Additions, Quick Links -->
</div>
