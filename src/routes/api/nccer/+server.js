import 'dotenv/config';
import { error } from '@sveltejs/kit';

const rootURL = process.env.VITE_ROOTURL;
const username = process.env.VITE_USERNAME;
const password = process.env.VITE_PASSWORD;

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	try {
		let response = await fetch(
			`https://api.nccer.org/api/User/GetByAlternateTypeAndId/USSSN/292724213`,
			{
				method: 'GET',
				headers: { Authorization: 'Basic ' + btoa('brootbot:FRcWO75rJSBU') }
			}
		);
		let userData = await response.json();
		return new Response({ userData });
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			body: { error: error }
		};
	}
}
