import prisma from '$lib/prisma';

export async function load() {
	const coins = await prisma.coin.findMany({});
	console.log(coins);
	return {
		coins
	};
}
