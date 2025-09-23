import { redirect, fail } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const name = form.get('name')?.toString().trim();

		if (!name) {
			return fail(400, { error: 'All fields are required and must be valid' });
		}

		await prisma.tray.create({
			data: {
				name: name
			}
		});

		throw redirect(303, '/trays');
	}
};
