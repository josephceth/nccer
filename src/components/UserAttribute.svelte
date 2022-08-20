<script>
	export let title = '';
	export let value = null;
	let columnCount = value == null ? 1 : 2;
</script>

<div class="grid grid-cols-1 md:grid-cols-{columnCount.toString()}">
	<p class="font-semibold">{title}</p>
	{#if value != null}
		<p class="font-light -mt-1.5 md:-mt-0">{value}</p>
	{/if}
</div>
