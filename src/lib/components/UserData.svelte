<script lang="ts">
	import type { NCCERPerson } from '$lib/types';
	import dayjs from 'dayjs';
	import Button from './Button.svelte';
	import Card from '$lib/components/Card.svelte';

	export let userData: NCCERPerson;
	export let callback: any;
</script>

{#if userData}
	<Card>
		<p class="text-lg font-medium ">
			{userData.FirstName}
			{userData.LastName} - #{userData.NccerCardNumber}
		</p>
		<p>Date Created {dayjs(userData.DateCreated).format('MM/DD/YYYY')}</p>
		<p>Last Modified: {dayjs(userData.DateModified).format('MM/DD/YYYY')}</p>

		<Button color="blue" text="Get More Data" {callback} />
	</Card>
{/if}
