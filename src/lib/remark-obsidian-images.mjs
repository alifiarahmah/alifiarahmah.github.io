/**
 * Remark plugin: rewrite Obsidian-style image embeds (`![[Name.png]]`)
 * into standard markdown image nodes so Astro can resolve and optimize them.
 *
 * Targets the `attachments/` folder relative to each markdown file by default.
 * Only image file extensions are treated as images. If the referenced file
 * does not exist on disk, the embed is left as the raw `![[...]]` text so a
 * broken link degrades visibly instead of failing the build.
 */

import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i;

// Matches `![[target]]` and `![[target|alias]]` (Obsidian embed + optional alias/width).
const EMBED_RE = /!\[\[([^\]\|]+)(?:\|([^\]]*))?\]\]/g;

export function remarkObsidianImages(options = {}) {
	const attachmentsDir = options.attachmentsDir ?? 'attachments';
	return (tree, vfile) => walk(tree, attachmentsDir, vfile);
}

function walk(node, attachmentsDir, vfile) {
	if (!node || !Array.isArray(node.children)) return;

	const rebuilt = [];
	for (const child of node.children) {
		walk(child, attachmentsDir, vfile); // depth-first: let descendants rewrite first
		if (child.type === 'text' && child.value.includes('![[')) {
			rebuilt.push(...expandText(child.value, attachmentsDir, vfile));
		} else {
			rebuilt.push(child);
		}
	}
	node.children = rebuilt;
}

function expandText(value, attachmentsDir, vfile) {
	const fileDir = resolveFileDir(vfile);
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

		const isImage = IMAGE_EXT.test(target);
		// Only transform when the attachment actually exists on disk; otherwise
		// leave the raw `![[...]]` so missing files don't fail the build.
		const exists = isImage && attachmentExists(fileDir, attachmentsDir, target);

		if (isImage && exists) {
			nodes.push({
				type: 'image',
				url: `./${attachmentsDir}/${encodeURI(target)}`,
				alt: alias ? alias.trim() : target.replace(/\.[^.]+$/, ''),
				title: null,
			});
		} else {
			// Non-image embed (e.g. note transclusion) or missing file — keep literal.
			nodes.push({ type: 'text', value: whole });
		}

		last = match.index + whole.length;
	}

	if (last < value.length) {
		nodes.push({ type: 'text', value: value.slice(last) });
	}
	return nodes.length ? nodes : [{ type: 'text', value }];
}

function resolveFileDir(vfile) {
	const filePath =
		(vfile && (vfile.path || (vfile.history && vfile.history[vfile.history.length - 1]))) || null;
	return filePath ? path.dirname(filePath) : null;
}

function attachmentExists(fileDir, attachmentsDir, target) {
	if (!fileDir) return true; // no file context: assume it exists (don't block transform)
	try {
		return fs.existsSync(path.join(fileDir, attachmentsDir, target));
	} catch {
		return true; // if we can't tell, don't block the transform
	}
}
