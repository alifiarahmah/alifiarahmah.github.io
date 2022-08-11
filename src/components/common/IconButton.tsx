import { IconButton as ChakraIconButton } from "@chakra-ui/react";

export interface IconButtonProps {
	icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
	label?: string;
	path?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	display?: string | object;
}

const Icon = ({ icon, path, label, onClick, display }: IconButtonProps) => {
	return (
		<ChakraIconButton
			variant="unstyled"
			size="lg"
			aria-label={label ?? ""}
			icon={icon}
			display={display ?? "flex"}
		/>
	);
};

export default function IconButton({
	icon,
	path,
	label,
	onClick,
	display,
}: IconButtonProps) {
	if (path) {
		return (
			<a href={path} target="_blank">
				<Icon icon={icon} label={label} display={display} />
			</a>
		);
	} else {
		return (
			<Icon icon={icon} label={label} display={display} onClick={onClick} />
		);
	}
}
