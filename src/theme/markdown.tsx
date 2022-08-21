import { Box, Code, Heading } from '@chakra-ui/react';
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('json', json);

export const markdownThemeConfig: any = {
	code: ({ inline, children, className }: any) => {
		if (inline) {
			return (
				<Code variant="unstyled" fontSize="auto">
					{children}
				</Code>
			);
		}
		return (
			<SyntaxHighlighter
				language={
					className?.replace('language-', '') === 'sh'
						? 'bash'
						: className?.replace('language-', '') === 'HTML'
						? 'cshtml'
						: className?.replace('language-', '')
				}
				style={darcula}
			>
				{children}
			</SyntaxHighlighter>
		);
	},
	h2: ({ children }: any) => (
		<Heading as="h3" mt={10} mb={5}>
			{children}
		</Heading>
	),
	img: (props: any) => (
		<Box display="inline-block">
			<img {...props} />
		</Box>
	)
};
