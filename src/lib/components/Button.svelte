<script lang="ts">
	export let callback = () => {};
	export let text: string = 'Click Me';
	export let color: string = 'blue';
	export let buttonSize: string = 'md';
</script>

<button class={`btn-${buttonSize} btn-${color}`} on:click={callback}>{text}</button>

<style>
	.btn-md {
		@apply font-bold py-2 px-4 rounded;
	}
	.btn-sm {
		@apply font-bold py-1 px-2 rounded;
	}
	.btn-blue {
		@apply bg-blue-500 text-white;
	}
	.btn-blue:hover {
		@apply bg-blue-700;
	}

	.btn-green {
		@apply bg-green-500 text-white;
	}
	.btn-green:hover {
		@apply bg-green-700;
	}
</style>
