<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import type { WrittenAssessment, Column, KnowledgeVerified } from '$lib/types';
	import { Tabs, Tab, TabList, TabPanel } from '$lib/components/tabs';
	import { DataIndicator, emptyFunction } from '$lib/scripts/site';
	export let knowledgeVerified: KnowledgeVerified;

	let assessmentColumns: Column[] = [
		{ key: 'DateCompleted', title: 'Date Completed', type: '', callback: emptyFunction },
		{ key: 'WrittenAssessmentTitle', title: 'Assessment ID', type: '', callback: emptyFunction }
	];
</script>

{#if knowledgeVerified != null}
	<Tabs>
		<TabList>
			<Tab>
				Written Assessments {@html DataIndicator(knowledgeVerified.WrittenAssessments)}
			</Tab>
		</TabList>
		<TabPanel>
			<Table
				title=""
				columns={assessmentColumns}
				rows={knowledgeVerified.WrittenAssessments}
				isDisabled={false}
			/>
		</TabPanel>
	</Tabs>
{/if}
