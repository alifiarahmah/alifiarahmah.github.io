import { Box, Code, Heading } from '@chakra-ui/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const markdownThemeConfig: any = {
	code: ({ inline, children }: any) => {
		if (inline) {
			return (
				<Code variant="unstyled" fontSize="auto">
					{children}
				</Code>
			);
		}
		return (
			<Code
				display="block"
				fontSize="md"
				whiteSpace="pre"
				my={3}
				p={5}
				sx={{ tabSize: 2 }}
			>
				{children}
			</Code>
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
