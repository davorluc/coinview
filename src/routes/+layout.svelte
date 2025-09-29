<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header
	class="fixed top-5 left-1/2 z-50 container flex w-full -translate-x-1/2 transform flex-row items-center justify-between rounded-xl bg-[#a31d1d] p-5 text-white shadow-xl"
>
	<h1 class="font-serif text-2xl">CoinView</h1>
	<nav class="space-x-4">
		<a href="/" class="hover:underline">Home</a>
		<a href="/coins" class="hover:underline">Coins</a>
		<a href="/trays" class="hover:underline">Trays</a>
	</nav>
</header>
<main>
	<section class="px-10 py-20">
		<div class="container flex flex-col gap-10">
			{@render children()}
		</div>
	</section>
</main>
