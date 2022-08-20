<script>
	import { verificationData } from '../stores/stores.js';
</script>

{#if $verificationData.CompletedPVTasks.Tasks.length > 0}
	<h2>Completed PV Tasks</h2>
	{#each $verificationData.CompletedPVTasks.Tasks as certification}
		<div>
			<p>{certification.TaskName}</p>
			<p>{certification.DateCompleted}</p>
		</div>
	{/each}
{/if}

<style>
	div {
		display: flex;
	}
	p {
		margin-right: 1rem;
	}
</style>
