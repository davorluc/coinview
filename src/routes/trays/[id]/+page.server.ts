import prisma from '$lib/prisma';

export async function load({ params }) {
	const trayId = Number(params.id);
	const coins = await prisma.coin.findMany({
		where: {
			trayId: {
				equals: trayId
			}
		}
	});
	return {
		coins
	};
}
