import { Plugin, defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

type SlidesPluginOptions = { directory: string };
const slides = ({ directory }: SlidesPluginOptions): Plugin => {
	const slidesGlob = `/${directory}/*.svelte`;
	const moduleId = '$slides';
	const resolvedId = `\0${moduleId}`;
	return {
		name: 'slides',
		resolveId(id) {
			if (id === moduleId) return resolvedId;
		},
		load(id) {
			if (id === resolvedId) {
				return `export default Object.entries(
  import.meta.glob(${JSON.stringify(slidesGlob)}, { eager: true }))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([,m]) => m.default);`;
			}
		}
	};
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [slides({ directory: 'src/slides' }), svelte()],
	base: './'
});
