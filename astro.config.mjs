import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://torresh79.github.io',
	base: 'testsite',
	vite: {
		plugins: [tailwindcss()],
	},
});