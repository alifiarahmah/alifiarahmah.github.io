import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<NextNProgress options={{ showSpinner: false }} />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
