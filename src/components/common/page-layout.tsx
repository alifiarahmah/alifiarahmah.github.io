import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Navbar from './navbar';

export interface LayoutProps {
	children: React.ReactNode;
	title?: string;
	px?: number | string;
	nonavbar?: boolean;
	nofooter?: boolean;
}

export default function Layout({
	children,
	px,
	nonavbar,
	nofooter,
	title
}: LayoutProps) {
	return (
		<>
			<Head>
				<title>
					{title
						? `${title} - alifiarahmah\'s homepage`
						: `alifiarahmah\'s homepage`}
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Container maxW="container.lg" py={10}>
				{children}
			</Container>
		</>
	);
}
