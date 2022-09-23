<script context="module">
	export const TABS = {};
</script>

<script lang="ts">
	import { afterUpdate, setContext, onDestroy, onMount, tick } from 'svelte';
	import { writable } from 'svelte/store';

	export let initialSelectedIndex = 0;

	const tabElements: any[] = [];
	const tabs: any[] = [];
	const panels: any[] = [];

	const controls = writable({});
	const labeledBy = writable({});

	const selectedTab = writable(null);
	const selectedPanel = writable(null);

	function removeAndUpdateSelected(arr: any[], item: any, selectedStore: any) {
		const index = arr.indexOf(item);
		arr.splice(index, 1);
		selectedStore.update((selected: any) =>
			selected === item ? arr[index] || arr[arr.length - 1] : selected
		);
	}

	function registerItem(arr: any[], item: any, selectedStore: any) {
		arr.push(item);
		selectedStore.update((selected: any) => selected || item);
		onDestroy(() => removeAndUpdateSelected(arr, item, selectedStore));
	}

	function selectTab(tab: any) {
		const index = tabs.indexOf(tab);
		selectedTab.set(tab);
		selectedPanel.set(panels[index]);
	}

	setContext(TABS, {
		registerTab(tab: any) {
			registerItem(tabs, tab, selectedTab);
		},

		registerTabElement(tabElement: any) {
			tabElements.push(tabElement);
		},

		registerPanel(panel: any) {
			registerItem(panels, panel, selectedPanel);
		},

		selectTab,

		selectedTab,
		selectedPanel,

		controls,
		labeledBy
	});

	onMount(() => {
		selectTab(tabs[initialSelectedIndex]);
	});

	afterUpdate(() => {
		for (let i = 0; i < tabs.length; i++) {
			controls.update((controlsData) => ({ ...controlsData, [tabs[i].id]: panels[i].id }));
			labeledBy.update((labeledByData) => ({ ...labeledByData, [panels[i].id]: tabs[i].id }));
		}
	});

	async function handleKeyDown(event: any) {
		if (event.target.classList.contains('svelte-tabs__tab')) {
			let selectedIndex = tabs.indexOf($selectedTab);

			switch (event.key) {
				case 'ArrowRight':
					selectedIndex += 1;
					if (selectedIndex > tabs.length - 1) {
						selectedIndex = 0;
					}
					selectTab(tabs[selectedIndex]);
					tabElements[selectedIndex].focus();
					break;

				case 'ArrowLeft':
					selectedIndex -= 1;
					if (selectedIndex < 0) {
						selectedIndex = tabs.length - 1;
					}
					selectTab(tabs[selectedIndex]);
					tabElements[selectedIndex].focus();
			}
		}
	}
</script>

<div
	class="svelte-tabs bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
	on:keydown={handleKeyDown}
>
	<slot />
</div>
