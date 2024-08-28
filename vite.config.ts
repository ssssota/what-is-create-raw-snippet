import { Plugin, defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

type SlidesPluginOptions = { directory: string };
const slides = ({ directory }: SlidesPluginOptions): Plugin => {
	const slidesGlob = `/${directory}/*.svelte`;
	return {
		name: 'slides',
		resolveId(id) {
			if (id === '$slides') return id;
		},
		load(id) {
			if (id === '$slides') {
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
