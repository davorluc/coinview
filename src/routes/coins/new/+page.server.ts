import { redirect, fail } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const nominal = form.get('nominal')?.toString().trim();
		const origin = form.get('origin')?.toString().trim();
		const continent = form.get('continent')?.toString().trim();
		const shorthand = form.get('shorthand')?.toString().trim();
		const avers = form.get('avers')?.toString().trim();
		const revers = form.get('revers')?.toString().trim();
		const general = form.get('general')?.toString().trim();
		const year = form.get('year')?.toString().trim();
		const value = Number(form.get('value'));

		if (!nominal || !origin || !continent || !shorthand || !avers || !revers || !general || !year) {
			return fail(400, { error: 'All fields are required and must be valid' });
		}

		await prisma.coin.create({
			data: {
				nominal,
				origin,
				continent,
				shorthand,
				avers,
				revers,
				general,
				year,
				value,
				tray: { connect: { id: 1 } }
			}
		});

		throw redirect(303, '/tray');
	}
};
