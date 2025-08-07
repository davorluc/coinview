import prisma from '$lib/prisma';

export async function load() {
	const trays = await prisma.tray.findMany();
	return {
		trays
	};
}
