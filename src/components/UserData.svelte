<script>
	import dayjs from 'dayjs';

	import { userData, verificationData } from '../stores/stores.js';
	import Card from '../components/Card.svelte';
	import UserAttribute from './UserAttribute.svelte';

	function handleNullString(value) {
		if (value === null) {
			return 'N/A';
		}
		if (value === '') {
			return 'N/A';
		}
		return value;
	}
</script>

{#if $userData != null}
	<Card title="">
		<div class="grid grid-cols-1 gap-1">
			<UserAttribute title={`${$userData.FirstName} ${$userData.LastName} - ${$userData.NccerCardNumber}`} />
			<UserAttribute title={$userData.AlernateTypeIdCode} value={$userData.AlternateId} />
			<UserAttribute title="Create Date" value={dayjs($userData.DateCreated).format('MM/DD/YYYY')} />
			<UserAttribute title={$userData.AlernateTypeIdCode} value={$userData.AlternateId} />
			<UserAttribute title="Email" value={handleNullString($userData.Email)} />
			<UserAttribute title="Mobile" value={handleNullString($userData.CellPhone)} />
		</div>
	</Card>
{/if}
