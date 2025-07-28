<script lang="ts">
	let { data } = $props();
</script>

<div class="grid grid-cols-4 gap-6 p-4">
	{#each data.coins as coin (coin.id)}
		<div class="tray-coin rounded bg-white p-6 shadow">
			<div class="mb-1 text-lg font-semibold">{coin.nominal}</div>
			<div class="mb-1 text-sm text-gray-700">Year: {coin.year}</div>
			<div class="text-sm text-gray-700">Origin: {coin.origin}</div>
		</div>
	{/each}
</div>
