import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Link from '../../components/common/link';
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
					<Link href={`blog/post/${post.slug}`}>
						<Heading as="h3">{post.title}</Heading>
					</Link>
					<Text color="gray">{post.date}</Text>
					<Text>{post.excerpt}</Text>
					<Link href={`blog/post/${post.slug}`}>
						<Text my={2} fontWeight="bold">
							Read more...
						</Text>
					</Link>
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
