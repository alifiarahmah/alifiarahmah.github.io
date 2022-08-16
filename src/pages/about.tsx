import axios from 'axios';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/common/page-layout';
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
