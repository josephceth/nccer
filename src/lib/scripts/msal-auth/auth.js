import * as msal from '@azure/msal-browser';
import { msalConfig, loginRequest, tokenRequest } from '$lib/scripts/msal-auth/authConfig.js';
export const myMSALObj = new msal.PublicClientApplication(msalConfig);

export function signIn() {
	return myMSALObj.loginPopup(loginRequest);
}

export function signOut() {
	const logoutRequest = {
		account: myMSALObj.getAccountByUsername(username),
		postLogoutRedirectUri: msalConfig.auth.redirectUri,
		mainWindowRedirectUri: msalConfig.auth.redirectUri
	};

	myMSALObj.logoutPopup(logoutRequest);
}

export function getTokenPopup(username) {
	if (username === undefined) {
		throw new Error('Username is required');
	}

	tokenRequest.account = myMSALObj.getAccountByUsername(username);

	return myMSALObj.acquireTokenSilent(tokenRequest).catch((error) => {
		console.warn('silent token acquisition fails. acquiring token using popup');
		if (error instanceof msal.InteractionRequiredAuthError) {
			// fallback to interaction when silent call fails
			return myMSALObj
				.acquireTokenPopup(request)
				.then((tokenResponse) => {
					console.log(tokenResponse);
					return tokenResponse;
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			console.warn(error);
		}
	});
}

export async function authFetch(method, url, username, body) {
	let response = await getTokenPopup(username);

	const headers = new Headers();
	const bearer = `Bearer ${response.accessToken}`;

	headers.append('Authorization', bearer);
	headers.append('Content-Type', 'application/json');

	let options = {
		method: method,
		headers: headers,
		body: JSON.stringify(body)
	};

	if(options.method === 'GET') {
		delete options.body;
	}

	return fetch(url, options);
	// await data.json();
	//console.log(json);
	//return json;
}
