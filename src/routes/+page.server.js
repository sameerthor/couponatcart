// @ts-nocheck

export const config = {
    isr: { expiration: 60, allowQuery: ['search'] },
  };

/** @type {import('./$types').PageServerLoad} */
export async function load() {

        const response = await fetch(
            'https://admin.couponatcart.com/scoop/public/api/home',
            {
                method: 'GET'
            }
        );
        const data = await response.json();
     console.log(data);
	return {
        categories : data.home_categories,
        stores : data.home_stores,
        special_stores : data.home_special_stores
	};
}