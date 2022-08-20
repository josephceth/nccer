<script>
	import { verificationData } from '../stores/stores.js';
	import { flip } from 'svelte/animate';

	let sortOrder = 1;
	function Sort(field) {
		console.log(field);
		sortOrder = -sortOrder;
		$verificationData.Certifications.CertifiedPlus = $verificationData.Certifications.CertifiedPlus.sort((a, b) =>
			a[field] > b[field] ? sortOrder : b[field] > a[field] ? -sortOrder : 0
		);
	}
</script>

<button on:click={() => Sort('DateCertified')}>Sort</button>
<button on:click={() => Sort('CertificationTitle')}>Sort</button>

{#if $verificationData.Certifications.InstructorAssessment.length > 0}
	<h2>Instructor Assessment</h2>
	<table>
		<thead>
			<th>Certification</th>
			<th>Completion Date</th>
		</thead>
		<tbody>
			{#each $verificationData.Certifications.InstructorAssessment as certification}
				<tr>
					<td>{certification.CertificationTitle}</td>
					<td>{certification.DateCertified}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

{#if $verificationData.Certifications.GoldCard.length > 0}
	<h2>GoldCard</h2>
	{#each $verificationData.Certifications.GoldCard as certification}
		<p>{certification.CertificationTitle}</p>
		<p>{certification.DateCertified}</p>
	{/each}
{/if}

{#if $verificationData.Certifications.CertifiedPlus.length > 0}
	<table class="table-auto border-collapse border border-slate-500 ">
		<thead>
			<th class="border border-slate-600 text-left pt-2 pb-2 pr-3 pl-3">Certification</th>
			<th class="border border-slate-600 pt-2 pb-2 pr-3 pl-3">Completion Date</th>
		</thead>
		<tbody>
			{#each $verificationData.Certifications.CertifiedPlus as certification (certification.CertificationTitle)}
				<tr animate:flip={{ duration: 500 }}>
					<td class="border border-slate-600 pt-1 pb-1 pr-2 pl-2">{certification.CertificationTitle}</td>
					<td class="border border-slate-600 pt-1 pb-1 pr-2 pl-2">{certification.DateCertified}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<style>
	div {
		display: flex;
	}
	p {
		margin-right: 1rem;
	}
</style>
