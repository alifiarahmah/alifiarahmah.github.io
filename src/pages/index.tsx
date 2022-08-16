import { Code, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import Layout from '../components/common/page-layout';
import {
	AiOutlineMail,
	AiOutlineInstagram,
	AiOutlineGithub,
	AiFillLinkedin
} from 'react-icons/ai';
import IconButton from '../components/common/icon-button';
import React from 'react';

export default function Home() {
	return (
		<Layout>
			<Flex direction="column" alignItems="center" my={20}>
				<Image
					src="https://avatars.githubusercontent.com/u/28982967"
					alt=""
					borderRadius="full"
					w={{ base: '50%', lg: '70%' }}
					maxW="200px"
				/>
				<Heading textAlign="center" mt={10}>
					Alifia Rahmah
				</Heading>
				<Text textAlign="center" fontSize={{ base: 'lg', lg: '2xl' }}>
					Undergraduate Informatics Student with interest in Software
					Engineering. <br />
					Currently learning web development, UI/UX, and mobile development.
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
		</Layout>
	);
}
