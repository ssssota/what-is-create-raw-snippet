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
		--vertical-padding: calc(var(--slide-height) * 0.075);
		--horizontal-padding: calc(var(--slide-width) * 0.075);
		padding: var(--vertical-padding) var(--horizontal-padding);
		height: 100%;
		position: relative;
		box-sizing: border-box;
	}
	:global(h1, h2, h3, h4, h5, h6, p) {
		margin: 1em 0 0 0;
	}

	@media print {
		@page {
			size: 1280px 960px;
			margin: 0;
		}
	}
</style>
