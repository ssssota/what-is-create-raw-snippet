<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import leftCursor from './cursors/left.svg?url';
	import rightCursor from './cursors/right.svg?url';
	type Props = {
		id?: string;
		onleftclick?: MouseEventHandler<HTMLButtonElement>;
		onrightclick?: MouseEventHandler<HTMLButtonElement>;
		onscreenenter?: () => void;
		children: Snippet;
	};
	let { id, onleftclick, onrightclick, onscreenenter, children }: Props = $props();
	let ref = $state<HTMLElement>();
	export function scrollIntoView() {
		ref?.scrollIntoView({ behavior: 'instant' });
	}
	$effect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) onscreenenter?.();
			},
			{ rootMargin: '0px 0px 0px 0px', threshold: 0.5 }
		);
		if (ref) observer.observe(ref);
		return () => observer.disconnect();
	});
</script>

<div {id} class="wrapper" bind:this={ref}>
	<section class="slide">
		{@render children()}
	</section>
	{#if onleftclick != null}
		<button
			class="cursor left"
			onclick={onleftclick}
			style="cursor:url('{leftCursor}') 0 8, pointer"
		></button>
	{/if}
	{#if onrightclick != null}
		<button
			class="cursor right"
			onclick={onrightclick}
			style="cursor:url('{rightCursor}') 16 8, pointer"
		></button>
	{/if}
</div>

<style>
	.wrapper {
		background-color: black;
		width: 100vw;
		width: 100dvw;
		height: 100vh;
		height: 100dvh;

		padding: 0;
		margin: 0;

		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cursor {
		border: 0;
		background: transparent;
	}
	.left {
		position: absolute;
		width: 10%;
		height: 100%;
		left: 0;
		top: 0;
	}
	.right {
		position: absolute;
		width: 10%;
		height: 100%;
		right: 0;
		top: 0;
	}
	:root {
		--slide-width: min(100vw, calc(400vh / 3));
		--slide-height: min(75vw, 100vh);
		--base-font-size: calc(var(--slide-width) / 40);
	}

	.slide {
		background-color: var(--background-color, white);

		width: var(--slide-width);
		height: var(--slide-height);
	}
	.slide :global(h1) {
		font-size: calc(var(--base-font-size) * 2);
	}
	.slide :global(h2) {
		font-size: calc(var(--base-font-size) * 1.6);
	}
	.slide :global(h3) {
		font-size: calc(var(--base-font-size) * 1.4);
	}
	.slide :global(h4),
	.slide :global(h5),
	.slide :global(h6),
	.slide :global(p),
	.slide :global(li),
	.slide :global(dl),
	.slide :global(table),
	.slide :global(blockquote) {
		font-size: calc(var(--base-font-size) * 1.2);
	}
	.slide :global(small) {
		font-size: calc(var(--base-font-size) * 0.8);
	}
	.slide :global(li p) {
		margin: 0;
	}
	.slide :global(pre) {
		font-size: calc(var(--base-font-size) * 0.8);
	}
	.slide :global(blockquote) {
		color: #666;
		border-left: calc(var(--base-font-size) * 0.25) solid #ccc;
		padding-left: calc(var(--base-font-size));
	}
	@media print {
		.slide {
			page-break-after: always;
		}
	}
</style>
