import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const totalCoins = await prisma.coin.count();
	const totalTrays = await prisma.tray.count();
	const totalValue = await prisma.coin.aggregate({
		_sum: {
			value: true
		}
	});

	return {
		totalCoins,
		totalTrays,
		totalValue: totalValue._sum.value || 0
	};
};
