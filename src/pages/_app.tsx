import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<NextNProgress />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
