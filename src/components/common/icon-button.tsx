import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import React from 'react';

export interface IconButtonProps
	extends React.ComponentProps<typeof ChakraIconButton> {
	icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
	label?: string;
	path?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	display?: string | object;
}

const Icon = ({ icon, label, display }: IconButtonProps) => {
	return (
		<ChakraIconButton
			variant="unstyled"
			size="lg"
			aria-label={label ?? ''}
			icon={icon}
			display={display ?? 'flex'}
		/>
	);
};

export default function IconButton({
	icon,
	path,
	label,
	onClick,
	display,
	...props
}: IconButtonProps) {
	if (path) {
		return (
			<a href={path} target="_blank">
				<Icon icon={icon} label={label} display={display} {...props} />
			</a>
		);
	} else {
		return (
			<Icon
				icon={icon}
				aria-label={label}
				display={display}
				onClick={onClick}
			/>
		);
	}
}
