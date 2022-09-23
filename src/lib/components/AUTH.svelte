<script>
	import { signIn, authFetch, myMSALObj } from '$lib/scripts/msal-auth/auth.js';
	import { account } from '../../stores/authStore.js';
	import { onMount } from 'svelte';

	async function login() {
		let response = await signIn();
		account.set(response.account);
		console.log($account);
	}

	onMount(async () => {
		const currentAccounts = myMSALObj.getAllAccounts();
		if (currentAccounts.length === 0) {
			return;
		} else if (currentAccounts.length > 1) {
			console.log(currentAccounts);
			console.warn('Multiple accounts detected.');
		} else if (currentAccounts.length === 1) {
			account.set(currentAccounts[0]);
		}
	});
</script>

{#if $account == null}
	<button on:click={login}>sign in</button>
	please log in
{:else}
	<p>{$account.name}</p>
{/if}
