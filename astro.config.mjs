import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkObsidianImages } from './src/lib/remark-obsidian-images.mjs';

/**
 * Trim trailing newlines from code fence source so Shiki doesn't render an
 * extra empty <span class="line"> at the end of every code block.
 */
const trimTrailingEmptyLines = {
	name: 'trim-trailing-empty-lines',
	preprocess(code) {
		return code.replace(/\n+$/, '');
	},
};

// https://astro.build/config
export default defineConfig({
	site: 'https://alifiarahmah.github.io',
	integrations: [tailwind()],
	output: 'static',
	markdown: {
		// Rewrite Obsidian `![[image.png]]` embeds into standard markdown images.
		remarkPlugins: [remarkObsidianImages],
		shikiConfig: {
			transformers: [trimTrailingEmptyLines],
		},
	},
});
