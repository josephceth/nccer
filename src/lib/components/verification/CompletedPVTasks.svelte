<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import type { CompletedPVTasks, Column } from '$lib/types';
	import { Tabs, Tab, TabList, TabPanel } from '$lib/components/tabs';
	import { DataIndicator, emptyFunction } from '$lib/scripts/site';
	export let pvTasks: CompletedPVTasks;

	let pvColumns: Column[] = [
		{ key: 'DateCompleted', title: 'Date Completed', type: '', callback: emptyFunction },
		{ key: 'TaskId', title: 'Task ID', type: '', callback: emptyFunction },
		{ key: 'TaskName', title: 'Description', type: '', callback: emptyFunction }
	];
</script>

{#if pvTasks != null}
	<Tabs>
		<TabList>
			<Tab>
				Performance Verification {@html DataIndicator(pvTasks.Tasks)}
			</Tab>
		</TabList>
		<TabPanel>
			<Table title="" columns={pvColumns} rows={pvTasks.Tasks} isDisabled={false} />
		</TabPanel>
	</Tabs>
{/if}
