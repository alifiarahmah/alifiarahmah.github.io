import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkObsidianImages } from './src/lib/remark-obsidian-images.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://alifiarahmah.github.io',
	integrations: [tailwind()],
	output: 'static',
	markdown: {
		// Rewrite Obsidian `![[image.png]]` embeds into standard markdown images.
		remarkPlugins: [remarkObsidianImages],
	},
});
