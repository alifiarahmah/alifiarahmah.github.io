import { Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface NavbuttonProps {
	label: string;
	path: string;
}

export default function Navbutton({ label, path }: NavbuttonProps) {
	const hoverColor = useColorModeValue("white", "black");
	const hoverBg = useColorModeValue("black", "gray.100");

	return (
		<Link to={path}>
			<Button
				width={{ base: "full", lg: "auto" }}
				py={{ base: 5, lg: 10 }}
				size="lg"
				background="transparent"
				fontSize="xl"
				fontWeight="medium"
				borderRadius="none"
				_hover={{
					backgroundColor: hoverBg,
					color: hoverColor,
				}}
			>
				{label}
			</Button>
		</Link>
	);
}
