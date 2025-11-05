import { defineConfig } from 'astro/config';
import tailwindcss from '@torresh79/testsite';

// https://astro.build/config
export default defineConfig({
	site: 'https://torresh79.github.io',
	base: 'testsite',
	vite: {
		plugins: [tailwindcss()],
	},
});