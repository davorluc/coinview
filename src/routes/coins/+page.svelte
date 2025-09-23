<script lang="ts">
	let { data } = $props();

	let addingCoin = $state(false);
	let editingCoin: any = $state(null); // null = no coin selected

	function flipAdd() {
		addingCoin = !addingCoin;
	}

	function flipEdit() {
		addingCoin = !addingCoin;
	}
</script>

<button class="rounded bg-[#a31d1d] p-4 text-white" onclick={flipAdd}>Add coin + </button>
<div class="grid grid-cols-4 gap-6">
	{#each data.coins as coin (coin.id)}
		<div class="tray-coin flex flex-col gap-1 rounded bg-white p-6 shadow">
			<div class="mb-1 text-lg font-semibold">{coin.nominal}</div>
			<div class="mb-1 text-sm text-gray-700">Year: {coin.year}</div>
			<div class="text-sm text-gray-700">Origin: {coin.origin}</div>
			<button
				class="w-full rounded bg-[#a31d1d] p-1 text-white"
				onclick={() => (editingCoin = coin)}
				>Edit coin
			</button>
		</div>
	{/each}
</div>

{#if addingCoin}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="relative w-[90%] max-w-2xl rounded-lg bg-white p-8 shadow-lg">
			<!-- Close button -->
			<button class="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onclick={flipAdd}>
				✕
			</button>

			<h2 class="mb-6 text-2xl font-semibold text-gray-800">Add New Coin</h2>

			<form method="POST" action="/coins/new" class="space-y-4">
				<!-- Grid for fields -->
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<label for="nominal" class="block text-sm font-medium text-gray-700">Nominal</label>
						<input
							name="nominal"
							id="nominal"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="origin" class="block text-sm font-medium text-gray-700">Origin</label>
						<input
							name="origin"
							id="origin"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="continent" class="block text-sm font-medium text-gray-700">Continent</label>
						<input
							name="continent"
							id="continent"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="shorthand" class="block text-sm font-medium text-gray-700">Shorthand</label>
						<input
							name="shorthand"
							id="shorthand"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="avers" class="block text-sm font-medium text-gray-700">Avers</label>
						<input
							name="avers"
							id="avers"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="revers" class="block text-sm font-medium text-gray-700">Revers</label>
						<input
							name="revers"
							id="revers"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>

					<!-- General field spans both columns -->
					<div class="sm:col-span-2">
						<label for="general" class="block text-sm font-medium text-gray-700">General</label>
						<textarea
							name="general"
							id="general"
							rows="4"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						></textarea>
					</div>

					<div>
						<label for="year" class="block text-sm font-medium text-gray-700">Year</label>
						<input
							name="year"
							id="year"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="value" class="block text-sm font-medium text-gray-700">Value</label>
						<input
							type="number"
							name="value"
							id="value"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
				</div>

				<!-- Submit button -->
				<div class="pt-4">
					<button
						type="submit"
						class="w-full rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
					>
						Add Coin
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
{#if editingCoin}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
		<div class="relative w-[90%] max-w-2xl rounded-lg bg-white p-8 shadow-lg">
			<!-- Close button -->
			<button
				class="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
				onclick={() => (editingCoin = null)}
			>
				✕
			</button>

			<h2 class="mb-6 text-2xl font-semibold text-gray-800">Edit Coin</h2>

			<form method="POST" action={`/coins/${editingCoin.id}/edit`} class="space-y-4">
				<!-- Grid for fields -->
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<label for="nominal" class="block text-sm font-medium text-gray-700">Nominal</label>
						<input
							name="nominal"
							id="nominal"
							value={editingCoin.nominal}
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="origin" class="block text-sm font-medium text-gray-700">Origin</label>
						<input
							name="origin"
							id="origin"
							value={editingCoin.origin}
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="continent" class="block text-sm font-medium text-gray-700">Continent</label>
						<input
							name="continent"
							id="continent"
							value={editingCoin.continent}
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="shorthand" class="block text-sm font-medium text-gray-700">Shorthand</label>
						<input
							name="shorthand"
							id="shorthand"
							value={editingCoin.shorthand}
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="avers" class="block text-sm font-medium text-gray-700">Avers</label>
						<input
							name="avers"
							id="avers"
							value={editingCoin.avers}
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="revers" class="block text-sm font-medium text-gray-700">Revers</label>
						<input
							name="revers"
							id="revers"
							value={editingCoin.revers}
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>

					<!-- General field spans both columns -->
					<div class="sm:col-span-2">
						<label for="general" class="block text-sm font-medium text-gray-700">General</label>
						<textarea
							name="general"
							id="general"
							value={editingCoin.general}
							rows="4"
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						></textarea>
					</div>

					<div>
						<label for="year" class="block text-sm font-medium text-gray-700">Year</label>
						<input
							name="year"
							id="year"
							value={editingCoin.year}
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
					<div>
						<label for="value" class="block text-sm font-medium text-gray-700">Value</label>
						<input
							type="number"
							name="value"
							id="value"
							value={editingCoin.value}
							required
							class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-black focus:ring-black"
						/>
					</div>
				</div>

				<!-- Submit button -->
				<div class="pt-4">
					<button
						type="submit"
						class="w-full rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
					>
						Finish Editing
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
