<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import type { CompletedTraining, Column } from '$lib/types';
	export let completedTrainings: CompletedTraining;
	import { Tabs, Tab, TabList, TabPanel } from '$lib/components/tabs';
	import { DataIndicator, emptyFunction } from '$lib/scripts/site';

	let modulesColumns: Column[] = [
		{ key: 'ModuleId', title: 'Module ID', type: '', callback: emptyFunction },
		{ key: 'ModuleTitle', title: 'Title', type: '', callback: emptyFunction },
		{ key: 'DateCompleted', title: 'Date Completed', type: '', callback: emptyFunction }
	];

	let levelsColumns: Column[] = [
		{ key: 'LevelID', title: 'Level ID', type: '', callback: emptyFunction },
		{ key: 'LevelTitle', title: 'Title', type: '', callback: emptyFunction },
		{ key: 'DateCompleted', title: 'Date Completed', type: '', callback: emptyFunction }
	];
</script>

{#if completedTrainings != null}
	<Tabs>
		<TabList>
			<Tab>Levels {@html DataIndicator(completedTrainings.Levels)}</Tab>
			<Tab>Modules {@html DataIndicator(completedTrainings.Modules)}</Tab>
			<Tab>Crafts {@html DataIndicator(completedTrainings.Crafts)}</Tab>
		</TabList>
		<TabPanel>
			<Table title="" columns={levelsColumns} rows={completedTrainings.Levels} isDisabled={false} />
		</TabPanel>
		<TabPanel>
			<Table
				title=""
				columns={modulesColumns}
				rows={completedTrainings.Modules}
				isDisabled={false}
			/>
		</TabPanel>
		<TabPanel>
			<Table title="" columns={levelsColumns} rows={completedTrainings.Crafts} isDisabled={false} />
		</TabPanel>
	</Tabs>
{/if}
