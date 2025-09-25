<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import coinviewLogo from '../coinview-logo.png';

	let showSplash = true;
	let height = 0;

	onMount(() => {
		height = window.innerHeight;

		setTimeout(() => (showSplash = false), 600);
	});
</script>

{#if showSplash}
	<div class="splash" out:fly={{ y: -height, duration: 1000, easing: cubicInOut, opacity: 100 }}>
		<img src={coinviewLogo} alt="Coinview Logo" />
	</div>
{/if}

<div class="container">
	<form method="GET" action="/trays" class="flex gap-2">
		<input type="text" name="q" placeholder="Enter tray ID..." class="flex-1 rounded border p-2" />
		<button type="submit" class="rounded bg-[#a31d1d] px-4 py-2 text-white"> Open Tray </button>
	</form>
</div>

<slot />

<style>
	.splash {
		position: fixed;
		inset: 0;
		background-color: #a31d1d; /* burgundy */
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 50;
	}
</style>
