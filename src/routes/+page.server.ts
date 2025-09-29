import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const totalCoins = await prisma.coin.count();
	const totalTrays = await prisma.tray.count();

	return {
		totalCoins,
		totalTrays
	};
};
