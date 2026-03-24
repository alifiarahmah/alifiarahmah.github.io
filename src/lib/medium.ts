import Parser from 'rss-parser';

export interface MediumPost {
	title: string;
	url: string;
	date: string;
	excerpt: string;
}

const FEED_URL = 'https://medium.com/feed/@alifiarahmah';

export async function fetchMediumPosts(): Promise<MediumPost[]> {
	try {
		const response = await fetch(FEED_URL);

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}

		const xml = await response.text();
		const parser = new Parser();
		const feed = await parser.parseString(xml);

		return feed.items.map((item) => {
			// contentSnippet: rss-parser's plain-text strip of content:encoded
			const snippet = item.contentSnippet ?? '';
			const excerpt =
				snippet.length > 220
					? snippet.slice(0, 220).trimEnd() + '…'
					: snippet.trim();

			return {
				title: item.title ?? 'Untitled',
				url: item.link ?? '#',
				date: item.pubDate
					? new Date(item.pubDate).toISOString().split('T')[0]
					: new Date().toISOString().split('T')[0],
				excerpt,
			};
		});
	} catch (err) {
		console.warn(
			'[medium] Could not fetch posts:',
			err instanceof Error ? err.message : String(err),
		);
		return [];
	}
}
