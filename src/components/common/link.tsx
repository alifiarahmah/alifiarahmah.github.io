import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import React from "react";

export interface LinkProps {
	children: React.ReactNode;
	href: string;
}

export default function Link({ children, href } : LinkProps) {
  return (
		<NextLink href={href} passHref>
			<ChakraLink>
				{ children }
			</ChakraLink>
		</NextLink>
	);
}