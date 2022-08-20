<script>
	export let title = null;
</script>

<div class="max-w-sm overflow-hidden rounded-lg shadow-lg border border-sky-800">
	<div class="px-6 py-4">
		<h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800 dark:text-gray-300">
			{title}
		</h4>
		<div class="leading-normal text-gray-700 dark:text-gray-200"><slot /></div>
	</div>
</div>
