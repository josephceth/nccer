<script>
	import { verificationData } from '../stores/stores.js';
</script>

{#if $verificationData.PerformanceVerified.PerformanceVerifications.length > 0}
	<h2>Performance Verifications</h2>
	{#each $verificationData.PerformanceVerified.PerformanceVerifications as certification}
		<div>
			<p>{certification.PerformanceVerificationTitle}</p>
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
