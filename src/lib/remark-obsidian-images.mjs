/**
 * Remark plugin: rewrite Obsidian-style image embeds (`![[Name.png]]`)
 * into standard markdown image nodes so Astro can resolve and optimize them.
 *
 * Targets the `attachments/` folder relative to each markdown file by default.
 * Only image file extensions are treated as images; anything else (e.g. note
 * transclusions) is left as literal text so it degrades visibly rather than
 * silently disappearing.
 */

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i;

// Matches `![[target]]` and `![[target|alias]]` (Obsidian embed + optional alias/width).
const EMBED_RE = /!\[\[([^\]\|]+)(?:\|([^\]]*))?\]\]/g;

export function remarkObsidianImages(options = {}) {
	const attachmentsDir = options.attachmentsDir ?? 'attachments';
	return (tree) => walk(tree, attachmentsDir);
}

function walk(node, attachmentsDir) {
	if (!node || !Array.isArray(node.children)) return;

	const rebuilt = [];
	for (const child of node.children) {
		walk(child, attachmentsDir); // depth-first: let descendants rewrite first
		if (child.type === 'text' && child.value.includes('![[')) {
			rebuilt.push(...expandText(child.value, attachmentsDir));
		} else {
			rebuilt.push(child);
		}
	}
	node.children = rebuilt;
}

function expandText(value, attachmentsDir) {
	const nodes = [];
	let last = 0;
	let match;

	EMBED_RE.lastIndex = 0;
	while ((match = EMBED_RE.exec(value)) !== null) {
		const [whole, targetRaw, alias] = match;
		const target = targetRaw.trim();

		if (match.index > last) {
			nodes.push({ type: 'text', value: value.slice(last, match.index) });
		}

		if (IMAGE_EXT.test(target)) {
			nodes.push({
				type: 'image',
				url: `./${attachmentsDir}/${encodeURI(target)}`,
				alt: alias ? alias.trim() : target.replace(/\.[^.]+$/, ''),
				title: null,
			});
		} else {
			// Non-image embed (e.g. note transclusion) — keep literal so it's visible.
			nodes.push({ type: 'text', value: whole });
		}

		last = match.index + whole.length;
	}

	if (last < value.length) {
		nodes.push({ type: 'text', value: value.slice(last) });
	}
	return nodes.length ? nodes : [{ type: 'text', value }];
}
