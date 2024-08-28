/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '$slides' {
	import type { ComponentType } from 'svelte';
	const slides: ComponentType[];
	export default slides;
}
