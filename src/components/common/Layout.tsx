import { Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';

export interface LayoutProps {
	children: React.ReactNode;
	px?: number | string;
	nonavbar?: boolean;
	nofooter?: boolean;
}

export default function Layout({
	children,
	px,
	nonavbar,
	nofooter
}: LayoutProps) {
	return (
		<>
			<Navbar />
			<Container maxW="container.lg" py={10}>
				{children}
			</Container>
		</>
	);
}
