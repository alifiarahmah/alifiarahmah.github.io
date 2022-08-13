import { Box, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../../components/common/page-layout';
import { getAllPosts } from '../../lib/blog';
import { IPost } from '../../types';

type Props = {
	allPosts?: IPost[];
};

export default function Blogs({ allPosts }: Props) {
	return (
		<Layout title="Blogs">
			<Heading as="h1" mb={20} textAlign="center">
				Blogs
			</Heading>
			{allPosts?.map((post) => (
				<Box key={post.slug} my={10}>
					<NextLink href={`blogs/post/${post.slug}`} passHref>
						<Link>
							<Heading as="h3">{post.title}</Heading>
						</Link>
					</NextLink>
					<Text>{post.excerpt}</Text>
				</Box>
			))}
		</Layout>
	);
}

export const getStaticProps = async () => {
	const allPosts = getAllPosts(['title', 'excerpt', 'date', 'slug', 'content']);
	return {
		props: {
			allPosts
		}
	};
};
