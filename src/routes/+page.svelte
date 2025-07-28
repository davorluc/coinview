<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import coinviewLogo from '../coinview-logo.png';

	export let form;

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

<header class="bg-cream flex items-center justify-between p-4">
	<h1 class="font-serif text-2xl">CoinView</h1>
	<nav class="space-x-4">
		<a href="/" class="hover:underline">Home</a>
		<a href="/tray" class="hover:underline">Tray</a>
	</nav>
</header>

<main class="bg-amber-50">
	<section>
		<form method="POST" action="/coins/new">
			<div>
				<label for="nominal">Nominal</label>
				<input name="nominal" id="nominal" required />
			</div>
			<div>
				<label for="origin">Origin</label>
				<input name="origin" id="origin" required />
			</div>
			<div>
				<label for="continent">Continent</label>
				<input name="continent" id="continent" required />
			</div>
			<div>
				<label for="shorthand">Shorthand</label>
				<input name="shorthand" id="Shorthand" required />
			</div>
			<div>
				<label for="avers">Avers</label>
				<input name="avers" id="avers" required />
			</div>
			<div>
				<label for="revers">Revers</label>
				<input name="revers" id="revers" required />
			</div>
			<div>
				<label for="general">General</label>
				<input name="general" id="general" required />
			</div>
			<div>
				<label for="year">Year</label>
				<input name="year" id="year" required />
			</div>
			<div>
				<label for="value">Value</label>
				<input type="number" name="value" id="value" required />
			</div>
			<button type="submit" class="bg-black p-4 text-white">Add Coin</button>
		</form>
	</section>
	<slot />
</main>

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
