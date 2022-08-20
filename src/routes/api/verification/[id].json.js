import 'dotenv/config';

const rootURL = process.env.VITE_ROOTURL;
const username = process.env.VITE_USERNAME;
const password = process.env.VITE_PASSWORD;

export const GET = async (request) => {
	try {
		let response = await fetch(
			`https://staging-api.nccer.org/api/user/OnlineVerification?NccerCardNumber=${request.params.id}`,
			{
				method: 'GET',
				headers: { Authorization: 'Basic ' + btoa('brootbot:7JWAe6bS9zca') }
			}
		);
		let userData = await response.json();
		return {
			status: 200,
			body: userData
		};
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			body: { error: error.message }
		};
	}
};
