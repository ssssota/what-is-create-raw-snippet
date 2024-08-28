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
		display: flex;
		align-items: center;
		height: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;

		scrollbar-width: none;
	}
	div::-webkit-scrollbar {
		display: none;
	}
	div > :global(*) {
		flex-shrink: 0;
		scroll-snap-align: center;
	}
</style>
