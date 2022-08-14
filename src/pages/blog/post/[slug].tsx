import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { IPost } from '../../../types';
import Layout from '../../../components/common/page-layout';
import { Container, Heading } from '@chakra-ui/react';
import { markdownThemeConfig } from '../../../theme/markdown';
import remarkGfm from 'remark-gfm';

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
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage'
	]);

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
