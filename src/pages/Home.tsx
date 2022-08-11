import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import Layout from '../components/common/Layout';
import {
	AiOutlineMail,
	AiOutlineInstagram,
	AiOutlineGithub,
	AiFillLinkedin
} from 'react-icons/ai';
import IconButton from '../components/common/IconButton';

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
						icon={<AiOutlineMail size="2.5rem" />}
						path="mailto:alifiarahmah@outlook.com"
					/>
					<IconButton
						icon={<AiOutlineInstagram size="2.5rem" />}
						path="https://instagram.com/hamharaifila"
					/>
					<IconButton
						icon={<AiOutlineGithub size="2.5rem" />}
						path="https://github.com/alifiarahmah"
					/>
					<IconButton
						icon={<AiFillLinkedin size="2.5rem" />}
						path="https://linkedin.com/in/alifiarahmah"
					/>
				</HStack>
			</Flex>
		</Layout>
	);
}
