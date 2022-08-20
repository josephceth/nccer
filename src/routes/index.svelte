<script>
	import UserData from '../components/UserData.svelte';
	import { userData, verificationData } from '../stores/stores.js';
	import { DoubleBounce } from 'svelte-loading-spinners';
	import UserVerification from '../components/UserVerification.svelte';
	let id = '6609399';
	let loadingData = false;
	let noUserData = false;

	async function GetByID() {
		loadingData = true;
		userData.set(null);
		verificationData.set(null);
		const response = await fetch(`api/nccer/${id}.json`);
		let json = await response.json();
		userData.set(json);
		console.log(userData);
		loadingData = false;
		if (json == null) {
			noUserData = true;
			console.log('NO USER DATA');
		} else {
			noUserData = false;
		}
	}

	async function GetVerificationByID() {
		loadingData = true;
		const response = await fetch(`api/verification/${$userData.NccerCardNumber}.json`);
		let json = await response.json();
		verificationData.set(json);
		console.log($verificationData);
		loadingData = false;
	}
</script>

<div>
	<input type="text" bind:value={id} />
	<button class="bg-blue-500 hover:bg-blue-700 py-1 px-4 rounded" on:click={GetByID}> Seach By NCCER # </button>

	{#if $userData != null}
		<UserData />
		<button class="bg-blue-500 hover:bg-blue-700 py-1 px-4 rounded" on:click={GetVerificationByID}> Get More Data </button>
	{/if}
	{#if $verificationData != null}
		<UserVerification />
	{/if}
	{#if noUserData}
		<p>No User Found</p>
	{/if}
	{#if loadingData}
		<DoubleBounce size="40" unit="px" duration="1s" />
	{/if}
</div>
