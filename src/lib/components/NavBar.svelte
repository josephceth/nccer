<script lang="ts">
	// found on https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	let selectedType: string = 'JDE';
	let lookupTypes: string[] = ['JDE', 'NCCER', 'SSN'];
	let ssn: string = '';
	let nccerId: string = '4799691';
	let jdeID: string = '228179';
	export let ssnCallback = (ssn: string) => {};
	export let nccerCallback = (nccerId: string) => {};
	export let jdeCallback = (jdeID: string) => {};

	onMount(async () => {
		const btn = document.querySelector('button.mobile-menu-button');
		const menu = document.querySelector('.mobile-menu');

		btn.addEventListener('click', () => {
			menu.classList.toggle('hidden');
		});
	});

	function themeSwitch() {
		if (localStorage.theme == 'light') {
			localStorage.theme = 'dark';
		} else {
			localStorage.theme = 'light';
		}

		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<nav class=" shadow-lg">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-7">
				<!-- Primary Navbar items -->
				<div class="hidden md:flex items-center space-x-1">
					<a href="/" class="py-4 px-2 border-b-4 border-green-500 font-semibold ">
						Brown & Root NCCER Lookup
					</a>
				</div>
			</div>
			<!-- Secondary Navbar items -->
			<div class="hidden md:flex items-center space-x-3 ">
				<select
					bind:value={selectedType}
					class="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
				>
					{#each lookupTypes as type}
						<option value={type} selected={type === selectedType}>{type}</option>
					{/each}
				</select>
				{#if selectedType == 'NCCER'}
					<input
						bind:value={nccerId}
						placeholder="Enter NCCER #"
						class="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
					/>
					<Button
						buttonSize="sm"
						color="green"
						text="Lookup #"
						callback={() => nccerCallback(nccerId)}
					/>
				{:else if selectedType == 'SSN'}
					<input
						type="password"
						bind:value={ssn}
						placeholder="###-##-####"
						class="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
					/>
					<Button
						buttonSize="sm"
						color="blue"
						text="Lookup SSN"
						callback={() => ssnCallback(ssn)}
					/>
				{:else if selectedType == 'JDE'}
					<input
						bind:value={jdeID}
						placeholder=""
						class="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
					/>
					<Button
						buttonSize="sm"
						color="blue"
						text="Lookup JDE"
						callback={() => jdeCallback(jdeID)}
					/>
				{/if}
				<button on:click={themeSwitch}>Switch</button>
			</div>
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button class="outline-none mobile-menu-button">
					<svg
						class=" w-6 h-6 text-gray-500 hover:text-green-500 "
						x-show="!showMenu"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	<!-- mobile menu -->
	<div class="hidden mobile-menu">
		<ul class="">
			<li class="active">
				<a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
					>Home</a
				>
			</li>
			<li>
				<a
					href="#services"
					class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a
				>
			</li>
			<li>
				<a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
					>About</a
				>
			</li>
			<li>
				<a
					href="#contact"
					class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a
				>
			</li>
		</ul>
	</div>
</nav>
