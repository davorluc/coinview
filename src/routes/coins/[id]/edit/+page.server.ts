import prisma from '$lib/prisma';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, params }) => {
		const id = Number(params.id);
		if (isNaN(id)) {
			return fail(400, { error: 'Invalid coin id' });
		}

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

		// basic validation
		if (!nominal || !origin || !continent || isNaN(value)) {
			return fail(400, { error: 'Missing or invalid fields' });
		}

		await prisma.coin.update({
			where: { id },
			data: {
				nominal,
				origin,
				continent,
				shorthand,
				avers,
				revers,
				general,
				year,
				value
			}
		});

		throw redirect(303, '/trays');
	}
};
