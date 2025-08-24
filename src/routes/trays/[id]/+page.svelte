<script lang="ts">
	let { data } = $props();

	let editing = $state(false);
	let selected = $state(data.coins.map((c) => c.id));

	function toggleSelected(coin: number) {
		if (selected.includes(coin)) {
			selected = selected.filter((x) => x !== coin);
		} else {
			selected.push(coin);
		}
	}

	function flipEditing() {
		editing = !editing;
	}
</script>

<button class="rounded bg-[#a31d1d] p-4 text-white" onclick={flipEditing}>Edit Tray</button>
<div class="grid grid-cols-4 gap-6 p-4">
	{#each data.coins as coin (coin.id)}
		<div class="tray-coin rounded bg-white p-6 shadow">
			<div class="mb-1 text-lg font-semibold">{coin.nominal}</div>
			<div class="mb-1 text-sm text-gray-700">Year: {coin.year}</div>
			<div class="text-sm text-gray-700">Origin: {coin.origin}</div>
		</div>
	{/each}
</div>

{#if editing}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="relative flex w-[90%] flex-col gap-4 rounded-lg bg-white p-8 shadow-lg">
			<!-- Close button -->
			<button
				class="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
				onclick={flipEditing}
			>
				✕
			</button>

			<h2 class="mb-6 text-2xl font-semibold text-gray-800">Edit Tray</h2>

			<div class="grid grid-cols-3 gap-4 sm:grid-cols-3">
				{#each data.allCoins as allCoin (allCoin.id)}
					<button
						class="tray-coin cursor-pointer rounded p-6 shadow {selected.includes(allCoin.id)
							? 'border-2 border-solid border-[#a31d1d]'
							: 'bg-white'}"
						onclick={() => toggleSelected(allCoin.id)}
					>
						<div class="mb-1 text-lg font-semibold">{allCoin.nominal}</div>
						<div class="mb-1 text-sm text-gray-700">Year: {allCoin.year}</div>
						<div class="text-sm text-gray-700">Origin: {allCoin.origin}</div>
					</button>
				{/each}
			</div>
			<form method="POST">
				{#each selected as id}
					<input type="hidden" name="coinIds" value={id} />
				{/each}

				<button type="submit" class="rounded bg-[#a31d1d] p-4 text-white"> Save </button>
			</form>
		</div>
	</div>
{/if}
