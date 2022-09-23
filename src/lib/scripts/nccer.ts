import type { NCCERPerson, OnlineVerification } from '$lib/types';
import { authFetch } from '../scripts/msal-auth/auth.js';

async function GetBySSN(ssn: string, username: string) {
	const response = await authFetch(
		'GET',
		`https://brvendorapi.azurewebsites.net/api/nccer/alt/${ssn}`,
		username,
		null
	);
	if (response.ok) {
		const userData: NCCERPerson = await response.json();
		return userData;
	} else {
		throw new Error(`GetByNCCER - ${response.status} - ${response.statusText}`);
	}
}

async function GetByJDEId(jdeId: string, username: string) {
	const response = await authFetch(
		'GET',
		`https://brvendorapi.azurewebsites.net/api/nccer/jde/${jdeId}`,
		username,
		null
	);
	if (response.ok) {
		const userData: NCCERPerson = await response.json();
		return userData;
	} else {
		throw new Error(`GetByNCCER - ${response.status} - ${response.statusText}`);
	}
}

async function GetByNCCER(nccerId: string, username: string) {
	const response = await authFetch(
		'GET',
		`https://brvendorapi.azurewebsites.net/api/nccer/${nccerId}`,
		username,
		null
	);
	if (response.ok) {
		const userData: NCCERPerson = await response.json();
		return userData;
	} else {
		throw new Error(`GetByNCCER - ${response.status} - ${response.statusText}`);
	}
}

async function GetCertificationData(nccerId: string, username: string) {
	const response = await authFetch(
		'GET',
		`https://brvendorapi.azurewebsites.net/api/nccer/${nccerId}/verification`,
		username,
		null
	);
	if (response.ok) {
		const userData: OnlineVerification = await response.json();
		return userData;
	} else {
		throw new Error(`GetByNCCER - ${response.status} - ${response.statusText}`);
	}
}

export { GetBySSN, GetCertificationData, GetByNCCER, GetByJDEId };
