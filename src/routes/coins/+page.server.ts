import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const sortBy = url.searchParams.get('sortBy') || 'nominal';
	const sortOrder = url.searchParams.get('sortOrder') || 'asc';

	const coins = await prisma.coin.findMany({
		orderBy: {
			[sortBy]: sortOrder
		}
	});
	return {
		coins,
		sortBy,
		sortOrder
	};
};
