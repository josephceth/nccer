<script>
	import { verificationData } from '../stores/stores.js';
</script>

{#if $verificationData.KnowledgeVerified.WrittenAssessments.length > 0}
	<h2>Knowledge Verified - Written Assessments</h2>
	{#each $verificationData.KnowledgeVerified.WrittenAssessments as certification}
		<div>
			<p>{certification.WrittenAssessmentTitle}</p>
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
