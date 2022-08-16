import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	IconButton,
	useColorMode,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';
import { routes } from '../../../routes';
import Navbutton from './nav-button';

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { toggleColorMode } = useColorMode();
	const darkModeIcon = useColorModeValue(
		<BsFillMoonFill size="1.5rem" />,
		<BsFillSunFill size="1.5rem" />
	);

	return (
		<>
			<Flex
				justifyContent={{ base: 'flex-end', lg: 'center' }}
				alignItems="center"
				width="100%"
				position="relative"
				my={{ base: 5, lg: 'auto' }}
			>
				<Box display={{ base: 'none', lg: 'block' }}>
					{routes.map((r) => (
						<Navbutton key={r.path} path={r.path} label={r.label} />
					))}
				</Box>
				<IconButton
					variant="unstyled"
					size="lg"
					onClick={toggleColorMode}
					aria-label="Toggle Dark Mode"
					icon={darkModeIcon}
					position={{ base: 'static', lg: 'absolute' }}
					right={0}
				/>
				<IconButton
					variant="unstyled"
					size="lg"
					onClick={onOpen}
					display={{ base: 'flex', lg: 'none' }}
					aria-label="Menu"
					icon={<MdMenu size="2rem" />}
				/>
			</Flex>

			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader my={5}>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody p={0}>
						{routes.map((r) => (
							<Navbutton key={r.path} path={r.path} label={r.label} />
						))}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
