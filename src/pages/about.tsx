import Layout from '../components/common/page-layout';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import axios from 'axios';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { markdownThemeConfig } from '../theme/markdown';

export default function About() {
	const [content, setContent] = useState('');

	useEffect(() => {
		axios
			.get(
				'https://raw.githubusercontent.com/alifiarahmah/alifiarahmah/main/README.md'
			)
			.then((res) => setContent(res.data));
	}, []);

	return (
		<Layout title="About Me">
			<ReactMarkdown
				/* tslint:disable-next-line */
				components={ChakraUIRenderer(markdownThemeConfig)}
				children={content}
				skipHtml
			/>
		</Layout>
	);
}
