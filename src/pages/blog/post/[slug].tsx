import { Heading, Text } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '../../../components/common/page-layout';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import { markdownThemeConfig } from '../../../theme/markdown';
import { IPost } from '../../../types';

type Props = {
	post: IPost;
	morePosts: IPost[];
	preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout title={`${post.title} - Blog`}>
			{router.isFallback ? (
				<div>Loading…</div>
			) : (
				<>
					<article className="mb-32">
						<Heading>{post.title}</Heading>
						<Text mb={10} color="gray">
							Created at {post.date}
						</Text>
						<ReactMarkdown
							components={ChakraUIRenderer(markdownThemeConfig)}
							remarkPlugins={[remarkGfm]}
							children={post.content}
							skipHtml
						/>
					</article>
				</>
			)}
		</Layout>
	);
}

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);

	return {
		props: {
			post
		}
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug
				}
			};
		}),
		fallback: false
	};
}
