<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import type { Column, PerformanceVerified } from '$lib/types';
	import { Tabs, Tab, TabList, TabPanel } from '$lib/components/tabs';
	import { DataIndicator, emptyFunction } from '$lib/scripts/site';
	export let performanceVerified: PerformanceVerified;

	let verificationColumns: Column[] = [
		{ key: 'DateCompleted', title: 'Date Completed', type: '', callback: emptyFunction },
		{ key: 'PerformanceVerificationTitle', title: 'Description', type: '', callback: emptyFunction }
	];
</script>

{#if performanceVerified != null}
	<Tabs>
		<TabList>
			<Tab>
				Performance Verification {@html DataIndicator(performanceVerified.PerformanceVerifications)}
			</Tab>
		</TabList>
		<TabPanel>
			<Table
				title=""
				columns={verificationColumns}
				rows={performanceVerified.PerformanceVerifications}
				isDisabled={false}
			/>
		</TabPanel>
	</Tabs>
{/if}
