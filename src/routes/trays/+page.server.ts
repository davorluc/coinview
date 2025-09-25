import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
	const q = url.searchParams.get('q');
	if (q) {
		// redirect to /trays/<id>
		throw redirect(303, `/trays/${q}`);
	}

	// otherwise return all trays
	const trays = await prisma.tray.findMany();
	return { trays };
}
