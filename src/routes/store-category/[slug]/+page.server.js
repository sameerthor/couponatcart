// @ts-nocheck

export const config = {
    isr: { expiration: 60, allowQuery: ['search'] },
  };

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
       console.log(params.slug);
        const response = await fetch(
            'https://admin.couponatcart.com/scoop/public/api/categories/'+params.slug,
            {
                method: 'GET'
            }
        );
        const data = await response.json();
	return {
        category : data.category
    }
}