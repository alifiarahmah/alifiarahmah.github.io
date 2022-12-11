import {
	Box,
	Heading,
	HStack,
	SkeletonCircle,
	SkeletonText,
	Tag,
	Text,
	useColorModeValue,
	VStack
} from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { FaDownload, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import IconButton from '../components/common/icon-button';
import Layout from '../components/common/page-layout';

export default function Projects({ projects }) {
	// Here's the signature
	const colorValue = useColorModeValue('black', 'black.200');
	// const [projects, setProjects] = useState<Array<IProject>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	var data = JSON.stringify({
		collection: 'project',
		database: 'test',
		dataSource: 'Cluster0',
		sort: { date: -1 }
	});
	var config = {
		method: 'post',
		url: `${process.env.NEXT_PUBLIC_API_URL}/action/find`,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
			'api-key': process.env.NEXT_PUBLIC_API_KEY
		},
		data: data
	};

	useEffect(() => {
		if (projects.length > 0) {
			setIsLoading(false);
		} else {
			// axios(config)
			// 	.then(function (response) {
			// 		setProjects(response.data);
			// 		setIsLoading(false);
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	});
		}
	}, []);

	return (
		<Layout title="Projects">
			<Heading as="h1" mb={20} textAlign="center">
				Projects
			</Heading>
			<VStack alignItems="stretch" gap={3}>
				{isLoading
					? Array.from({ length: 6 }, (_, i) => (
							<Box
								key={i}
								borderWidth="3px"
								borderColor={colorValue}
								p={3}
								display="flex"
								flexDirection="column"
								justifyContent="space-between"
								h="250px"
							>
								<Box>
									<SkeletonText noOfLines={1} />
								</Box>
								<SkeletonText noOfLines={5} />
								<Box mt={3}>
									<SkeletonText noOfLines={1} my={3} />
									<HStack gap={0} justifyContent="flex-end" mt={2}>
										{Array.from({ length: 3 }, (_, i) => (
											<SkeletonCircle key={i} />
										))}
									</HStack>
								</Box>
							</Box>
					  ))
					: projects.map((project) => (
							<Box
								key={project.id}
								borderWidth="3px"
								borderColor={colorValue}
								p={3}
								display="flex"
								flexDirection="column"
								justifyContent="space-between"
							>
								<Box>
									<Heading as="h3" size="lg" my={2}>
										{project.name}
									</Heading>
									<Text>{project.description}</Text>
								</Box>
								<HStack
									my={2}
									overflowX="scroll"
									sx={{
										'&::-webkit-scrollbar': {
											display: 'none'
										}
									}}
									gap={1}
									justifyContent="space-between"
									alignItems="center"
								>
									<Tag size="lg">{project.tags}</Tag>
									<HStack>
										{project.githubUrl && (
											<IconButton
												path={project.githubUrl}
												aria-label="Github"
												icon={<FaGithub size="1.5rem" />}
												variant="ghost"
											/>
										)}
										{project.miscDownloadUrl && (
											<IconButton
												path={project.miscDownloadUrl}
												aria-label="Download"
												icon={<FaDownload size="1.5rem" />}
												variant="ghost"
											/>
										)}
										{project.extUrl && (
											<IconButton
												path={project.miscDownloadUrl}
												aria-label="Download"
												icon={<FaExternalLinkAlt size="1.5rem" />}
												variant="ghost"
											/>
										)}
									</HStack>
								</HStack>
							</Box>
					  ))}
			</VStack>
		</Layout>
	);
}

export async function getStaticProps() {
	const prisma = new PrismaClient();

	const projects = await prisma.project.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	});

	return {
		props: {
			projects: JSON.parse(JSON.stringify(projects))
		}
	};
}
