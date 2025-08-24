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

	const allCoins = await prisma.coin.findMany();
	return {
		coins,
		allCoins
	};
}

export const actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
		const coinIds = data.getAll('coinIds').map((id) => Number(id));

		await prisma.tray.update({
			where: { id: Number(params.id) },
			data: {
				coins: {
					set: coinIds.map((id) => ({ id }))
				}
			}
		});

		return { success: true };
	}
};
