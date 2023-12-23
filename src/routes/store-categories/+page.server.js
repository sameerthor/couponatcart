// @ts-nocheck

export const config = {
    isr: { expiration: 60, allowQuery: ['search'] },
  };

/** @type {import('./$types').PageServerLoad} */
export async function load() {

        const response = await fetch(
            'https://couponatcart.com/scoop/public/api/categories',
            {
                method: 'GET'
            }
        );
        const data = await response.json();
	return {
        res : data
	};
}