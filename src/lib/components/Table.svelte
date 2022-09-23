<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Column } from '$lib/types';
	import Icon from 'svelte-awesome';
	import sortDown from 'svelte-awesome/icons/sortDown'; // alternative, more efficient import
	import sortUp from 'svelte-awesome/icons/sortUp'; // alternative, more efficient import

	let sortOrder = 1;
	export let rows: any[];
	export let columns: Column[];
	export let isDisabled: boolean = false;
	export let title: string = '';
	let className = '';

	const dispatch = createEventDispatcher();
	let sortedColumn = '';

	function rowClick(row: any) {
		dispatch('rowClick', row);
	}

	function sortData(field: any) {
		console.log(field);
		sortedColumn = field;
		sortOrder = -sortOrder;
		rows = rows.sort((a, b) =>
			a[field] > b[field] ? sortOrder : b[field] > a[field] ? -sortOrder : 0
		);
	}
</script>

{#if rows.length > 0}
	<p class="text-lg font-medium">{title}</p>
	<div class="tableContainer">
		<table class="w-100">
			<thead class="sticky top-0 bg-neutral-200 dark:bg-gray-900 border-b-4 border-b-red-700">
				<tr>
					{#each columns as header}
						<th on:click={() => sortData(header.key)}
							>{#if sortedColumn == header.key}
								<Icon data={sortOrder == 1 ? sortDown : sortUp} />
							{/if}{header.title}</th
						>
					{/each}
				</tr>
			</thead>

			<tbody>
				{#each rows as row}
					<tr on:click={() => rowClick(row)}>
						{#each columns as header}
							{#if header.type == 'button'}
								<td
									><button disabled={isDisabled} on:click={() => header.callback(row)}>View</button
									></td
								>
							{:else}
								<td>{row[header.key]}</td>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	table {
		border-collapse: separate; /* Don't collapse */
		border-spacing: 0;
	}
	.tableContainer {
		height: 300px;
		overflow-y: auto;
		overflow-x: hidden;
	}
	th,
	td {
		@apply py-2 px-8 text-left uppercase;
	}

	th {
		@apply border-b-2 dark:border-white border-gray-700;
	}
	tbody tr:nth-child(even) {
		@apply dark:bg-gray-800 bg-gray-100;
	}
	tbody tr:nth-child(odd) {
		@apply dark:bg-gray-900 bg-white;
	}
</style>
