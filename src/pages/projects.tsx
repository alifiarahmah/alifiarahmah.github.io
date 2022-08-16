import {
	Box,
	Flex,
	GridItem,
	Heading,
	HStack,
	SimpleGrid,
	Skeleton,
	SkeletonText,
	Tag,
	Text
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
	AiOutlineDownload,
	AiOutlineGithub,
	AiOutlineLink
} from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import IconButton from '../components/common/icon-button';
import Layout from '../components/common/page-layout';
import { IProject } from '../types';

export default function Projects() {
	const [projects, setProjects] = useState<Array<IProject>>([]);
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
			// 'Access-Control-Request-Headers': '*',
			'api-key': process.env.NEXT_PUBLIC_API_KEY
		},
		data: data
	};

	useEffect(() => {
		axios(config)
			.then(function (response) {
				console.log(response.data.documents);
				setProjects(response.data.documents);
				console.log(projects.toString());
			})
			.finally(() => {
				setIsLoading(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<Layout title="Projects">
			<Heading>Projects</Heading>
			<SimpleGrid my={20} columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
				{isLoading
					? Array.from({ length: 6 }, (_, i) => (
							<GridItem
								key={i}
								borderWidth="3px"
								borderColor="black"
								p={3}
								display="flex"
								flexDirection="column"
								justifyContent="space-between"
							>
								<SkeletonText noOfLines={5} height="250px" />
							</GridItem>
					  ))
					: projects.map((project) => (
							<GridItem
								key={project._id}
								borderWidth="3px"
								borderColor="black"
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
								<Box mt={3}>
									<HStack
										overflowX="scroll"
										sx={{
											'&::-webkit-scrollbar': {
												display: 'none'
											}
										}}
										gap={1}
										alignItems="center"
									>
										{project.tags.map((tag: string) => (
											<Tag size="sm" key={tag}>
												{tag}
											</Tag>
										))}
									</HStack>
									<HStack gap={0} justifyContent="flex-end">
										{project.link.map((link: { type: string; url: string }) => (
											<IconButton
												aria-label={link.type}
												key={link.url}
												icon={
													link.type === 'github' ? (
														<AiOutlineGithub size="1.5rem" />
													) : link.type === 'web' ? (
														<BiLinkExternal size="1.5rem" />
													) : link.type === 'mobile' ||
													  link.type === 'desktop' ? (
														<AiOutlineDownload size="1.5rem" />
													) : (
														<AiOutlineLink size="1.5rem" />
													)
												}
												path={link.url}
												my={0}
											/>
										))}
									</HStack>
								</Box>
							</GridItem>
					  ))}
			</SimpleGrid>
		</Layout>
	);
}
