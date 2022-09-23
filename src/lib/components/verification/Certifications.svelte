<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import type { Certifications, Column } from '$lib/types';
	export let certifications: Certifications;
	import { Tabs, Tab, TabList, TabPanel } from '$lib/components/tabs';
	import { DataIndicator, emptyFunction } from '$lib/scripts/site';

	let certifiedPlusColumns: Column[] = [
		{ key: 'CertificationTitle', title: 'Certification Title', type: '', callback: emptyFunction },
		{ key: 'DateCertified', title: 'Date Certified', type: '', callback: emptyFunction }
	];

	let instructorColumns: Column[] = [
		{ key: 'CertificationCode', title: 'Certification Code', type: '', callback: emptyFunction },
		{ key: 'CertificationTitle', title: 'Certification Title', type: '', callback: emptyFunction },
		{ key: 'DateCertified', title: 'Date Certified', type: '', callback: emptyFunction },
		{ key: 'ExpirationDate', title: 'Expiration Date', type: '', callback: emptyFunction }
	];
</script>

{#if certifications != null}
	<Tabs>
		<TabList>
			<Tab>Certified Plus {@html DataIndicator(certifications.CertifiedPlus)}</Tab>
			<Tab>Gold Card {@html DataIndicator(certifications.GoldCard)}</Tab>
			<Tab>Instructor Assessments {@html DataIndicator(certifications.InstructorAssessment)}</Tab>
		</TabList>
		<TabPanel>
			<Table
				title=""
				columns={certifiedPlusColumns}
				rows={certifications.CertifiedPlus}
				isDisabled={false}
			/>
		</TabPanel>
		<TabPanel>
			<Table
				title=""
				columns={certifiedPlusColumns}
				rows={certifications.GoldCard}
				isDisabled={false}
			/>
		</TabPanel>
		<TabPanel>
			<Table
				title=""
				columns={instructorColumns}
				rows={certifications.InstructorAssessment}
				isDisabled={false}
			/>
		</TabPanel>
	</Tabs>
{/if}
