<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header class="bg-cream flex items-center justify-between px-10 py-4">
	<h1 class="font-serif text-2xl">CoinView</h1>
	<nav class="space-x-4">
		<a href="/" class="hover:underline">Home</a>
		<a href="/coins" class="hover:underline">Coins</a>
		<a href="/trays" class="hover:underline">Trays</a>
	</nav>
</header>
<main>
	<section class="px-10 py-20">
		<div class="flex flex-col gap-10">
			{@render children()}
		</div>
	</section>
</main>
