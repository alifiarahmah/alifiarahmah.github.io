import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React, { useEffect, useState } from 'react';
import {
	AiFillLinkedin,
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineMail
} from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';
import IconButton from '../components/common/icon-button';
import Layout from '../components/common/page-layout';
import { markdownThemeConfig } from '../theme/markdown';

export default function Home() {
	const [aboutContent, setAboutContent] = useState('');

	useEffect(() => {
		axios
			.get(
				'https://raw.githubusercontent.com/alifiarahmah/alifiarahmah/main/README.md'
			)
			.then((res) => setAboutContent(res.data));
	}, []);

	return (
		<Layout>
			<Box>
				<Flex
					direction="column"
					alignItems="center"
					h="70vh"
					justifyContent="center"
				>
					<Image
						src="https://avatars.githubusercontent.com/u/28982967"
						alt=""
						borderRadius="full"
						w={{ base: '50%', lg: '70%' }}
						maxW="200px"
						mt={20}
					/>
					<Heading textAlign="center" mt={10}>
						Alifia Rahmah
					</Heading>
					<Text textAlign="center" fontSize={{ base: 'lg', lg: '2xl' }}>
						Undergraduate Informatics Student with interest in Software
						Engineering, Cloud, and Cybersecurity.
						Currently learning web development, UI/UX, and mobile development, cloud, and cybersecurity basics.
					</Text>
					<HStack gap={5} my={5}>
						<IconButton
							aria-label="email"
							icon={<AiOutlineMail size="2.5rem" />}
							path="mailto:alifiarahmah@outlook.com"
						/>
						<IconButton
							aria-label="instagram"
							icon={<AiOutlineInstagram size="2.5rem" />}
							path="https://instagram.com/hamharaifila"
						/>
						<IconButton
							aria-label="github"
							icon={<AiOutlineGithub size="2.5rem" />}
							path="https://github.com/alifiarahmah"
						/>
						<IconButton
							aria-label="linkedin"
							icon={<AiFillLinkedin size="2.5rem" />}
							path="https://linkedin.com/in/alifiarahmah"
						/>
					</HStack>
				</Flex>
			</Box>
			<Box mt={20}>
				<ReactMarkdown
					components={ChakraUIRenderer(markdownThemeConfig)}
					children={aboutContent}
					skipHtml
				/>
			</Box>
		</Layout>
	);
}
