<script lang="ts">
	let { data } = $props();

	console.log(data);

	let addingTray = $state(false);
	let editingCoin = $state(false); // TODO: add editing functionality

	function flipAdd() {
		addingTray = !addingTray;
	}
</script>

<button class="rounded bg-[#a31d1d] p-4 text-white" onclick={flipAdd}>Add tray+ </button>
<div class="grid grid-cols-4 gap-6 p-4">
	{#each data.trays as tray (tray.id)}
		<div class="tray-coin rounded bg-white p-6 shadow">
			<div class="mb-1 text-lg font-semibold">{tray.name}</div>
			<a href="/trays/{tray.id}">Open Tray</a>
		</div>
	{/each}
</div>
