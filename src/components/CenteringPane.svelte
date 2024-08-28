<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
	};
	const { children }: Props = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
